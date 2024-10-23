const form = document.getElementById('myForm');
            const nameInput = document.getElementById('username');
            const emailInput = document.getElementById('email');
            const nameError = document.getElementById('usernameError');
            const errorEmail = document.getElementById('emailError');
            const message = document.getElementById('feedback');
            const passwordInput = document.getElementById('password');
            const errorPass = document.getElementById('passwordError');
            const showPasswordInput = document.getElementById('showPassword');


            function validarFormulario(event){
                event.preventDefault();

                let valid = true;


                if(!nameInput.value && nameInput.value.trim() === ''){
                    nameError.style.display = 'block';
                    nameError.textContent = "Nome Inválido";
                    nameInput.classList.add('error');
                    valid = false;
                } else {
                    nameError.style.display = 'none';
                    nameInput.classList.remove('error');
                }

                if(!emailInput.value && emailInput.value.trim() === ''){
                    errorEmail.style.display = 'block';
                    errorEmail.textContent = "Email inválido";
                    emailInput.classList.add('error');
                    valid = false;
                } else {
                    errorEmail.style.display = 'none';
                    emailInput.classList.remove('error');
                }

                if(valid){
                    message.style.display = 'block';
                    message.textContent = "Formulário Enviado com Sucesso!";
                    message.classList.add('success');
                    form.reset();
                } else {
                    message.style.display = 'block';
                    message.textContent = "Formulário Inválido, Corrija os Campos e Envie Novamente";
                    message.classList.add('error');
                }
            }

            function mostrarSenha(){
                console.log('showPasswordInput', showPasswordInput.checked);
                if(showPasswordInput.checked){
                    passwordInput.type = 'text';
                } else {
                    passwordInput.type = 'password';
                }
            }

            function validateSenha(){
                if(passwordInput.value.length < 8){
                    errorPass.style.display = 'block';
                    errorPass.textContent = "Senha deve ter no mínimo 8 caracteres";
                    passwordInput.classList.add('error');
                } else {
                    errorPass.style.display = 'none';
                    passwordInput.classList.remove('error');
                }
            }

            form.addEventListener('submit', validarFormulario);
            showPasswordInput.addEventListener('change', mostrarSenha);
            passwordInput.addEventListener('blur', validateSenha);