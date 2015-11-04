/*Funcion para validar formato de correo al iniciar sesión*/
function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        window.location.href='InicioSalida.html';
    }
    else
    {
        alert("Nombre de correo no valido");
    }
}

/*Funcion para validar correo en el registro al crear un nuevo nombre de usuario*/
function ValidateRegistro(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        window.location.href='Signup.html';
    }
    else
    {
        alert("Formato de correo no valido");
    }
}

/*Previsto para utilizar en el destinatario*/
function ValidateDestino(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        window.location.href='SalidaClick.html';
    }
    else
    {
        alert("Formato de Correo No Valido");
    }
}