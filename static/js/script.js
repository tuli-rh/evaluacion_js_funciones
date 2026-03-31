/* 1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará 
tras el descuento municipal.
Lógica: Si el monto es mayor a $70.000, el descuento es del 15%. Si es menor, es del 5%.
Regla: La Función Principal debe mostrar el total a pagar con un signo de peso ($).
*/

function montoPermiso(monto) {
    if (monto >= 70000) {
        monto = monto * 15 / 100;
        return `El descuento es de 15%. El pago final es de $${monto}`;
    } else if (monto < 70000) {
        monto = monto * 5 / 100;
        return `El descuento es de 5%. El pago final es de $${monto}`;
    }
}

function pagoPermisos() {
    const container = document.getElementById("resultado-container1");
    const result1 = document.getElementById("result1");
    const input = document.getElementById("input1");
    let monto = parseFloat(input.value);
    let resultado = montoPermiso(monto);

    result1.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

/* 2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)
Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>
*/

let nombres = [];

function agregarPaciente(tipo) {
    const container = document.getElementById("resultado-container2");
    const result = document.getElementById("result2");
    const input = document.getElementById("input2");

    let nombre = input.value;

    if (tipo === "normal") {
        nombres.push(nombre);
    } else if (tipo === "urgencia") {
        nombres.unshift(nombre);
    }

    let listaHTML = "<ol>";
    for (let i = 0; i < nombres.length; i++) {
        listaHTML += `<li>${nombres[i]}</li>`;
    }
    listaHTML += "</ol>";

    result.innerHTML = listaHTML;

    input.value = "";
    container.classList.remove("d-none");
}


/* 3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)
Verificar si un RUT o nombre está en el listado de entrega de beneficios.
Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para buscar 
si el dato ingresado existe en la lista.
Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".
*/

let beneficiarios = ["Ana", "Luis", "Pedro", "Sofia", "Maria", "Juan"];
function buscarNombre(nombre) {
    for (let i = 0; i < beneficiarios.length; i++) {
        if (beneficiarios[i] === nombre) {
            return "Beneficiario Verificado";
        }
    }
    return "No registrado";
}

function entregaBeneficios() {
    const container = document.getElementById("resultado-container3");
    const result3 = document.getElementById("result3");
    const input = document.getElementById("input3");
    let nombre = input.value;
    let resultado = buscarNombre(nombre);

    result3.textContent = resultado;
    input.value = "";
    container.classList.remove("d-none");
}
