<template>
  <div class="login">
    <section class="main">
        <h1 class="main__title">{{ title }}</h1>
        <div class="main__login-block-wrapper">
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
                </ValidationProvider>
                <template v-if="passwordShow" >
                    <label for="password" class="main__label">Пароль</label>
                    <ValidationProvider
                        class="validation-provider"
                        v-slot="{ errors }"
                        :rules="{ required: true}"
                        >
                        <input type="text" name="password" class="main__login-input">
                        <span class="validation-error">{{ errors[0] }}</span>
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
        <div class="main__footer">
            <div class="main__footer-item">
                <div class="footer__dropdown">
                    <span class="footer__dropdown-item">Завершение работы</span>
                    <span class="footer__dropdown-item">Перезагрузка</span>
                </div>
                <switch-icon class="footer__icon footer__switch" />
            </div>
            <div class="main__footer-item">
                <wifi-connect v-if="online" class="footer__icon" />
                <wifi-no-connect v-else class="footer__icon" />
            </div>
            <div class="main__footer-item">
                {{ convertedLang }}
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
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { localize, extend } from 'vee-validate'

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
    switchIcon
},  

    data() {
        return {
            title: 58,
            login: '',
            password: '',
            online: true,
            language: 'rus'
        }
    },

    methods: {
        onLogin() {
            return 
        }
    },

    computed: {
        inputLabel() {
            return !this.login ? 'Чек / Логин' : this.passwordShow ? 'Логин' : 'Чек'
        },  
        passwordShow() {
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
        justify-content: space-between;
        .main__title {
            color: gray;
            font-size: 12rem;
            font-weight: 800;
            margin: 1rem 0 3rem;
        }
        .main__subtitle {
            color: white;
            font-size: 2rem;
            font-weight: 600;
        }
        .main__login-block-wrapper {
            width: 100%;
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
        .main__label {
            color: white;
            margin-bottom: 1rem;
            display: inline-block;
            text-align: left;
            width: 87%;
        }
        .main__button {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
            background: #47c2ff;
            color: white;
            border-radius: 0.5rem;
            width: 88%;
            cursor: pointer;
        }
        .main__footer {
            background: #3f3f3f;
            display: flex;
            align-items: center;
            padding: 0.5rem 1rem;
            
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
                    .footer__dropdown {
                        visibility: visible;
                    }
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
                top: -3rem;
                left: 0;
                visibility: hidden;
                background: black;
                .footer__dropdown-item {
                    display: inline-block;
                    padding: 0.25rem;
                    width: max-content;
                    min-width: 10rem;
                    &:hover {
                        background: gray;
                    }
                }
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