<template>
  <div class="login">
    <section class="main">
        <h1 class="main__title">{{ title }}</h1>
        <div>
            <button class="main__tab-button main__tab-button_small" :class="{ 'main__tab-button_acitve' : activeTab === 'enter'}" @click="switchMainBlock('enter')">
                {{ $tc('login.enter')  }}
            </button>
            <button class="main__tab-button" :class="{ 'main__tab-button_acitve' : activeTab === 'extra'}" @click="switchMainBlock('extra')">
                {{ $tc('login.extra')  }}
            </button>
        </div>
        <div class="tab-wrapper">
            <div v-if="activeTab === 'enter'" class="main__login-block-wrapper">
                <h2 class="main__subtitle">{{ $tc('login.title') }}</h2>
                <ValidationObserver>
                <div class="main__login-block">
                    <label for="login" class="main__label">{{ inputLabel }}</label>
                    <ValidationProvider
                        class="validation-provider"
                        v-slot="{ errors }"
                        :rules="{ required: true}"
                    >
                        <input type="text" name="login" v-model="login" class="main__login-input">
                        <span class="validation-error">{{ errors[0] }}</span>
                        <span @click="clearField">
                            <closeIcon class="main__erase-button" />
                        </span>
                    </ValidationProvider>
                    <template v-if="passwordShow" >
                        <label for="password" class="main__label">Пароль</label>
                        <ValidationProvider
                            class="validation-provider"
                            v-slot="{ errors }"
                            :rules="{ required: true}"
                            >
                            <input :type="passwordFieldType" name="password" v-model="password" class="main__login-input" >
                            <span class="validation-error">{{ errors[0] }}</span>
                            <span @click="onPasswordShow(true)">
                                <eye-close v-if="passwordHide" class="main__erase-button main__show-button"  />
                            </span>
                            <span @click="onPasswordShow(false)">
                                <eye-open v-if="!passwordHide" class="main__erase-button main__show-button" />
                            </span>
                        </ValidationProvider>
                    </template>
                    <div v-else class="password-placeholder">
                    </div>
                    <button class="main__button" @click="onLogin">
                        {{ $tc('login.buttonTitle')  }}
                    </button>
                </div>
                </ValidationObserver>
            </div>
            <div v-if="activeTab === 'extra'" class="main__extra-block-wrapper">
                <button class="extra__create-button" @click="createNewLogin()">{{ $tc('login.extraContent.createLogin') }}</button>
            </div>
        </div>
        <div class="main__footer">
            <div class="main__footer-item">
                <div class="footer__dropdown" @mouseleave="toggleSwitchDropdown()" :class="{ 'footer__dropdown-show' : switchDropdownShow }">
                    <span class="footer__dropdown-item" @click="switchOff()">{{ $tc('login.switchOff') }}</span>
                    <span class="footer__dropdown-item" @click="reload()">{{ $tc('login.reboot') }}</span>
                </div>
                <span @click="toggleSwitchDropdown()">
                    <switch-icon class="footer__icon footer__switch" />
                </span>
            </div>
            <div class="main__footer-item">
                <wifi-connect v-if="online" class="footer__icon" />
                <wifi-no-connect v-else class="footer__icon" />
            </div>
            <div class="main__footer-item">
                 <div class="footer__dropdown" @mouseleave="toggleLangDropdown()" :class="{ 'footer__dropdown-show' : langDropdownShow }">
                    <span class="footer__dropdown-item footer__dropdown-item_fit" @click="changeLang('rus')">{{ $tc('login.lang.rus') }}</span>
                    <span class="footer__dropdown-item footer__dropdown-item_fit" @click="changeLang('eng')">{{ $tc('login.lang.eng') }}</span>
                </div>
                <span @click="toggleLangDropdown()">
                    {{ convertedLang }}
                </span>
            </div>
        </div>
    </section>
    <section class="advertisement">
        <img class="advertisement__image" src="login-screen.png" alt="login image">
    </section>
  </div>
</template>

<script>
import wifiConnect from './icons/wifiConnect.vue'
import wifiNoConnect from './icons/wifiNoConnect.vue'
import switchIcon from './icons/switchIcon.vue';
import closeIcon from './icons/closeIcon.vue';
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { localize, extend } from 'vee-validate'
import eyeOpen from './icons/eyeOpen.vue';
import eyeClose from './icons/eyeClose.vue';

extend("required", required);

localize({
    en: {
        "code": "en",
        "messages": {
            required() { 
                return `The field is required`
            },
        }
    },
    ru: {
        "code": "ru",
        "messages": {
            required() { 
                return `Поле обязательно для заполнения`
            },
        }
    },
    kz: {
        code: 'kz',
        "messages": {
            required() { 
                return `Толтыруға қажет өріс`
            }, 
        }
    }
});

localize('ru');

export default {
    name: 'login-view',

    components: {
        ValidationObserver,
        ValidationProvider,
        wifiNoConnect,
        wifiConnect,
        switchIcon,
        closeIcon,
        eyeOpen,
        eyeClose
    },  

    data() {
        return {
            title: 58,
            login: '',
            password: '',
            online: true,
            language: 'rus',
            passwordFieldType: 'password',
            passwordHide: true,
            switchDropdownShow: false,
            langDropdownShow: false,
            activeTab: 'enter'
        }
    },

    methods: {
        onLogin() {
            return 
        },
        onPasswordShow(show) {
            console.log('show: ',show)
            if(show) {
                this.passwordFieldType = 'text'
                this.passwordHide = false
            } else {
                this.passwordFieldType = 'password'
                this.passwordHide = true
            }
        },
        clearField() {
            this.login = ''
        },
        toggleSwitchDropdown() {
            this.switchDropdownShow = !this.switchDropdownShow
        },
        toggleLangDropdown() {
            this.langDropdownShow = !this.langDropdownShow
        },  
        reload() {
            const data = JSON.stringify({ type: 'reboot' })
            console.log(data)
            this.toggleSwitchDropdown()
        },
        switchOff() {
            const data = JSON.stringify({ type: 'switchOff' })
            console.log(data)
            this.toggleSwitchDropdown()
        },
        changeLang(lang) {
            const data = JSON.stringify({ type: 'langChange', data: { lang: lang} })
            console.log(data)
            this.language = lang
        },
        switchMainBlock(tab) {
            this.activeTab = tab
        },
        createNewLogin() {
            const data = JSON.stringify({ type: 'createLogin' })
            console.log(data)
        }
    },

    computed: {
        inputLabel() {
            return !this.login ? `${this.$tc('login.bill')} / ${this.$tc('login.login')}` : this.passwordShow ? `${this.$tc('login.login')}` : `${this.$tc('login.bill')}` 
        },  
        passwordShow() {
            // const show = (!!this.login && /\d/.test(this.login[0]) === false) ? true : false
            // if (!show) {this.password = ''}
            return !!this.login && /\d/.test(this.login[0]) === false
        },
        convertedLang() {
            return this.language.toUpperCase()
        }
    }
}
</script>

<style lang="scss">
.login {
    display: flex;
    background: black;
    height: 98vh;
    width: 100%;
    .main {
        width: 25%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        position: relative;
        .main__title {
            color: gray;
            font-size: 12rem;
            font-weight: 800;
            margin: 1rem 0 3rem;
        }
        .tab-wrapper {
            display: flex;
            justify-content: flex-start;
            min-height: 40%;
        }
        .main__login-block-wrapper {
            width: 100%;
            position: relative;
            // top: -8rem;
        }
        .main__subtitle {
            color: white;
            font-size: 2rem;
            font-weight: 600;
        }
        .main__login-block {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .main__login-input {
            width: 80%;
            padding: 0.75rem 1rem;
            border-radius: 0.25rem;
            background: #2a382d;
            border: 1px solid #5e5e5e;
            margin-bottom: 0.5rem;
            color: white;
            font-size: 1.5rem;
        }
        .main__erase-button {
            position: absolute;
            right: 3rem;
            top: 1.25rem;
            width: 1rem;
            height: 1rem;
            cursor: pointer;
        }
        .main__show-button {            
            width: 1.5rem;
            height: 1.5rem;
            top: 1rem;
        }
        .main__label {
            color: white;
            margin-bottom: 1rem;
            display: inline-block;
            text-align: left;
            width: 87%;
        }
        .main__tab-button {
            padding: 0.75rem 1.5rem;
            font-size: 1.5rem;
            background: #494949;
            color: rgb(204, 204, 204);
            border-radius: 0.25rem;
            width: 56%;
            cursor: pointer;
            &:hover {
                background: #5e5e5e;
                color: white;
            }
        }
        .main__tab-button_small {
            width: 32%;
        }
        .main__tab-button_acitve {
            background: #5e5e5e;
            color: white;
        }
        .main__button {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
            background: #47c2ff;
            color: white;
            border-radius: 0.5rem;
            width: 88%;
            cursor: pointer;
            &:hover {
                background: #1bacf5;
            }
        }
        .main__extra-block-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding: 1rem 0;
            .extra__create-button {
                padding: 1rem 1.5rem;
                font-size: 1.5rem;
                background: #47c2ff;
                color: white;
                border-radius: 0.5rem;
                width: 86%;
                cursor: pointer;
                &:hover {
                    background: #1bacf5;
                }
            }
        }
        .main__footer {
            background: #3f3f3f;
            display: flex;
            align-items: center;
            padding: 0.5rem 1rem;
            justify-self: flex-end;
            position: absolute;
            width: 92%;
            bottom: 0;
            
            .main__footer-item {
                border-radius: 0.25rem;
                padding: 0.125rem;
                min-height: 2rem;
                min-width: 2rem;
                margin-left: 1rem;
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                cursor: pointer;
                position: relative;
                &:hover {
                    background: black;
                    // .footer__dropdown {
                    //     visibility: visible;
                    // }
                }
            }
            .footer__icon {
                width: 2rem;
                height: 2rem;
            }
            .footer__switch {
            }
            .footer__dropdown {
                position: absolute;
                color: white;
                top: -4rem;
                left: 0;
                visibility: hidden;
                background: black;
                .footer__dropdown-item {
                    display: inline-block;
                    padding: 0.45rem;
                    width: max-content;
                    min-width: 10rem;
                    text-align: left;
                    &:hover {
                        background: gray;
                    }
                }
                .footer__dropdown-item_fit {
                    text-transform: uppercase;
                }
            }
            .footer__dropdown-show {
                visibility: visible;
            }
        }
    }
    .advertisement {
        width: 75%;
        padding: 0.5rem 0.5rem 0;
        background: black;

        &__image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    .validation-provider {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
        position: relative;
    }
    .validation-error {
        color: red;
        text-align: left;
        width: 88%;
    }
    .password-placeholder {
        height: 7rem;
    }
}
</style>