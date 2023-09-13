<template>
    <div id="login">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="main">
                        <img src="../assets/note-login1.jpeg" alt="">
                    </div>
                    <div class="form">
                        <h3 @click="showRegister">创建账户</h3>
                        <transition name="slide">
                            <div v-show="isShowRegister" class="register">
                                <input type="text" v-model="register.username" placeholder="用户名">
                                <input type="password" v-model="register.password" @keyup.enter="onRegister" placeholder="密码">
                                <p v-bind:class="{error: register.isError}">{{ register.notice }}</p>
                                <div class="button" @click="onRegister">创建账号</div>
                            </div>
                        </transition>
                        <h3 @click="showLogin">登录</h3>
                        <transition name="slide">
                            <div v-show="isShowLogin" class="login">
                                <input type="text" v-model="login.username" placeholder="请输入用户名">
                                <input type="password" v-model="login.password" @keyup.enter="onLogin" placeholder="密码">
                                <p v-bind:class="{error: login.isError}">{{ login.notice }}</p>
                                <div class="button" @click="onLogin">登录</div>
                            </div>
                        </transition>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  import Auth from '@/apis/auth'

  Auth.getInfo()
    .then(data => {
      console.log(data)
    })

export default {
    data() {
        return {
            isShowLogin: true,
            isShowRegister: false,
            login: {
                username: '',
                password: '',
                notice: '请输入用户名和密码',
                isError: false
            },
            register: {
                username: '',
                password: '',
                notice: '创建账号后，请记住用户名和密码',
                isError:false
            }
        }
    },

    methods: {
        showLogin() {
            this.isShowLogin = true
            this.isShowRegister = false
        },
        showRegister() {
            this.isShowLogin = false
            this.isShowRegister = true
        },
        onRegister() {
            if (!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.register.username)) {
                this.register.isError = true
                this.register.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
                return
            }
            if (!/^.{6,16}$/.test(this.register.password)) {
                this.register.isError = true
                this.register.notice = '密码长度为6-16个字符'
                return
            }
            this.register.isError = false
            this.register.notice = ''
            console.log(`start register..., username:${this.register.username}, password: ${this.register.password}`)
            Auth.register({
                username: this.register.username,
                password: this.register.password,
            }).then(data => {
                console.log(data)
            })
        },
        onLogin() {
            if (!/^[\w\u4e00-\u9fa5]{3,15}$/.test(this.login.username)) {
                this.login.isError = true
                this.login.notice = '用户名3~15个字符，仅限于字母数字下划线中文'
                return
            }
            if (!/^.{6,16}$/.test(this.login.password)) {
                this.login.isError = true
                this.login.notice = '密码长度为6-16个字符'
                return
            }
            this.login.isError = false
            this.login.notice =''
            console.log(`start login..., username:${this.login.username}, password: ${this.login.password}`)
            Auth.login({
                username: this.login.username,
                password: this.login.password,
            }).then(data => {
                console.log(data)
            })
        }
    }
}
</script>

<style lang="less" >
.modal-mask{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0, .7);
    display: table;
    transition: opacity .3s ease;
} 

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 800px;
    height: 500px;
    margin: 0px auto;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0,0,0, .33);
    transition: opacity .3s ease;
    font-family: Helvetica, Arial, sans-serif;
    display: flex;
}

.main{
    flex: 1;
    background: #36bc64;
    background-size: contain;
    position: relative;

    img{
        width: 530px;
        // max-width: 100%;
        // height: 500px;
        // margin-top: -50%;
        // margin-left: -50%;
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
    }
}

.form{
    width: 270px;
    border-left: 1px solid #ccc;
    overflow: hidden;

    h3{
        padding: 10px 20px;
        font-size: 16px;
        font-weight: normal;
        border-top: 1px solid #eee;
        cursor: pointer;
        margin-top: -1px;

        &:nth-of-type(2){
            border-bottom: 1px solid #eee;
        }
    }

    .button {
        background-color: #2bb964;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-weight: bold;
        color: #fff;
        border-radius: 4px;
        margin-top: 18px;
        cursor: pointer;
    }


/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-enter-active {
  transition: all .2s ease;
}
.slide-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-enter, .slide-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
    .login, .register{
        padding: 0px 20px;
        border-top: 1px solid #eee;
        // height: 0;
        overflow: hidden;
        // transition: height  2s ease-out;

        &.show{
            height:267px;
        }
    }

    input{
        display: block;
        width: 100%;
        height: 35px;
        line-height: 35px;
        padding: 0 6px;
        border-radius: 4px;
        border: 1px solid #ccc;
        outline: none;
        font-size: 14px;
        margin-top: 10px;
    }
    input:focus{
        border: 3px solid #9dcaf8;
    }

    p{
        font-size:12px;
        margin-top: 10px;
        color: #444;
    }
    .error{
        color: red;
    }
    .login{
        border-top: 0;
    }
}
</style>