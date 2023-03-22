const codigo_input = document.querySelector("#codigo");
const descripcion_input = document.querySelector("#descripcion");
const modelo_input = document.querySelector("#modelo");
const producto_input = document.querySelector("#producto");
const fabricante_input = document.querySelector("#fabricante");
const estatus_input = document.querySelector("#estatus");
const stock_input = document.querySelector("#stock");
const precio_input = document.querySelector("#precio");

//Agrega los elementos del formulario
const button_agregar = document.querySelector("#agregar_datos");

//limpia los inputs
const add_submit = document.querySelector("#add_submit");

//Borra todos los elementos insertados
const delete_button = document.querySelector("#deleted-all");

const form = document.querySelector('form');


//const content_div = document.getElementById("content");
const content_table = document.getElementById("content_table");

// Espera a que cargue nuestro contenido html ...

document.addEventListener('DOMContentLoaded', () => {
    
    //MOSTRAR EN VISTA TODO EL CONTENIDO DE LOCALSTORAGE...

    // 1.-Obtener de LocalStorage...

    const inventario = JSON.parse(localStorage.getItem("inventario"));
    const elementoshtml=[];
    if (inventario === null) {
        const parrafo = document.createElement("p");
        const texto_parrafo = document.createTextNode("No Existen Registros para Mostrar");
        parrafo.appendChild(texto_parrafo);
        content_table.append(parrafo);
    }else{
     
        render(inventario);
    }

    button_agregar.addEventListener('click', (e) => {
        e.preventDefault();

        // Agregar funcion de agregar elementos ...
        const inventario = JSON.parse(localStorage.getItem("inventario")) || [];
        const codigo = codigo_input.value;

        const descripcion = descripcion_input.value;
        const modelo = modelo_input.value;
        const producto = producto_input.value;
        const fabricante = fabricante_input.value;
        const estatus = estatus_input.value;
        const stock = stock_input.value;
        const precio = precio_input.value;

        const invent= { //JSON
            //key      :value
            "codigo" : codigo,
            "descripcion" : descripcion,
            "modelo" : modelo,
            "producto" : producto,
            "fabricante" : fabricante,
            "estatus" : estatus,
            "stock" : stock,
            "precio" : precio
        }

        inventario.push(invent);
        localStorage.setItem('inventario', JSON.stringify(inventario));
      
        // Limpia el contenido de la tabla ...
        content_table.innerHTML = '';
        // Dibujara los elementos del localStorage
        render(inventario);
        //aqui agregaremos un elemento a la tabla visual en la página html
        i =inventario.length-1;
  
        
        
    });

    //Boton eliminar todo
    delete_button.addEventListener("click", function() {
        localStorage.clear(inventario);
        content_table.innerHTML = "";
    });


    // delete_button.addEventListener('click', () => {
    //     localStorage.setItem("inventario", JSON.stringify([]));

    //     // Limpia el contenido de la tabla ...
    //     content_table.innerHTML = '';

    //     const parrafo = document.createElement("p");
    //     content_table.append(parrafo);
    // });

    function render(inventario){
        
        
        for (let i = 0; i < inventario.length; i++) {
            
        
            const input_cod =document.createElement("input");  
            input_cod.value=inventario[i].codigo;
            input_cod.id= "codigo-${i}";
            input_cod.style="width: 100px;"
            
            const input_des =document.createElement("input");
            input_des.value=inventario[i].descripcion;
            input_des.id= "descripcion-${i}";
            input_des.style="width: 150px;"

            const input_mod =document.createElement("input");
            input_mod.value=inventario[i].modelo;
            input_mod.id="modelo-${i}";
            input_mod.style="width: 100px;"
            
            const input_pro =document.createElement("input");
            input_pro.value=inventario[i].producto;
            input_pro.id="producto-${i}";
            input_pro.style="width: 100px;"
          
            const input_fab =document.createElement("input");
            input_fab.value=inventario[i].fabricante;
            input_fab.id="fabricante-${i}";
            input_fab.style="width: 100px;"
          
            const input_est =document.createElement("input");
            input_est.value=inventario[i].estatus;
            input_est.id="estatus-${i}";
            input_est.style="width: 100px;"
          
            const input_sto =document.createElement("input");
            input_sto.value=inventario[i].stock;
            input_sto.id="stock-${i}";
            input_sto.style="width: 50px;"
          
            const input_pre =document.createElement("input");
            input_pre.value=inventario[i].precio;
            input_pre.id="precio-${i}";
            input_pre.style="width: 50px;"
             // crear boton eliminar ..
            const button_delete = document.createElement("button");
            const text_button_delete = document.createTextNode("Eliminar");
            button_delete.appendChild(text_button_delete);

            // nueva seccion
           const button_update = document.createElement('button');
            const text_button_update = document.createTextNode('Actualizar');
            button_update.appendChild(text_button_update);
            // agregamos el boton guardar en el formulario ...
            const button_save = document.createElement('button');
            const text_button_save = document.createTextNode('Guardar');
            button_save.appendChild(text_button_save);
          
            

            //elementos tendra todos los elementos html en un arreglo inputs y botones y elemento tendra un elemento
             
            const elemento= { //JSON
            //key      :value
            "codigo":input_cod,
            "descripcion":input_des,
            "modelo":input_mod,
            "producto":input_pro,
            "fabricante":input_fab,
            "estatus":input_est,
            "stock":input_sto,
            "precio":input_pre,
            "button_delete":button_delete,
            "button_update":button_update,
            "button_save": button_save
               
            }
            elementoshtml.push(elemento);
            
            const tabla_td=document.createElement("td");
            const tabla_tr=document.createElement("tr");
            
            const input_cod_td=document.createElement("td");
            input_cod_td.appendChild(input_cod);
            const input_des_td=document.createElement("td");
            input_des_td.appendChild(input_des);
            const input_mod_td=document.createElement("td");
            input_mod_td.appendChild(input_mod);
            const input_pro_td=document.createElement("td");
            input_pro_td.appendChild(input_pro);
            const input_fab_td=document.createElement("td");
            input_fab_td.appendChild(input_fab);
            const input_est_td=document.createElement("td");
            input_est_td.appendChild(input_est);
            const input_sto_td=document.createElement("td");
            input_sto_td.appendChild(input_sto);
            const input_pre_td=document.createElement("td");
            input_pre_td.appendChild(input_pre);

            const button_upt_td=document.createElement("td");
            button_upt_td.appendChild(button_update);
            //button_upt_td.appendChild(button_delete);
           // const button_del_td=document.createElement("td");
            button_upt_td.appendChild(button_delete);
            button_upt_td.appendChild(button_save);


            tabla_tr.appendChild(input_cod_td);
            tabla_tr.appendChild(input_des_td);
            tabla_tr.appendChild(input_mod_td);
            tabla_tr.appendChild(input_pro_td)
            tabla_tr.appendChild(input_fab_td);
            tabla_tr.appendChild(input_est_td);
            tabla_tr.appendChild(input_sto_td);
            tabla_tr.appendChild(input_pre_td);
            tabla_tr.appendChild(button_upt_td);
        
            content_table.append(tabla_tr);
              button_save.hidden=true; //se oculta por que solo se vera cuando se presione actualizar
            
              button_delete.onclick = () => {
                deleteLocalStorage(i, inventario);
     
            }
            
            // 
            button_update.onclick = () => {
               
         
                button_agregar.hidden=true;
                elementoshtml[i].button_update.hidden=true;
                elementoshtml[i].button_delete.hidden=true;
                elementoshtml[i].button_save.hidden=false;

               

                button_save.onclick = (e) => {
                    e.preventDefault()
                    // actualizar informacion ..
                    const invent = {
                        "codigo" : elementoshtml[i].codigo.value,
                        "descripcion" : elementoshtml[i].descripcion.value,
                        "modelo" : elementoshtml[i].modelo.value,
                        "producto" : elementoshtml[i].producto.value,
                        "fabricante" : elementoshtml[i].fabricante.value,
                        "estatus" : elementoshtml[i].estatus.value,
                        "stock" : elementoshtml[i].stock.value,
                        "precio" : elementoshtml[i].precio.value
                    }

                    inventario.splice(i, 1, invent); // actualizacion ...

                    localStorage.setItem('inventario', JSON.stringify(inventario));

                    content_table.innerHTML = "";
                    render(inventario);

                    codigo_input.value =""
                    descripcion_input.value = ""
                    modelo_input.value= ""
                    producto_input.value = ""
                    fabricante_input.value = ""
                    estatus_input.value = ""
                    stock_input.value = ""
                    precio_input.value = ""
                    button_save.hidden = true;
                    button_agregar.hidden = false;
                    elementoshtml[i].button_update.hidden=false;
                    elementoshtml[i].button_delete.hidden=false;
                    elementoshtml[i].button_save.hidden=true;
                }

                form.appendChild(button_save);
            }

                     
            
        }
        
    }
    function deleteLocalStorage(i, inventario) {
        inventario.splice(i, 1); 
        localStorage.setItem('inventario', JSON.stringify(inventario));
        content_table.innerHTML = '';
        render(inventario)
       
    }
    
    function saveTable(i) {
        const codigo_input = document.querySelector(`#codigo-${i}`);
        const descripcion_input = document.querySelector(`#descripcion-${i}`);
        const modelo_input = document.querySelector(`#modelo-${i}`);
        const producto_input = document.querySelector(`#producto-${i}`);
        const fabricante_input = document.querySelector(`#fabricante-${i}`);
        const estatus = document.querySelector(`#estatus-${i}`);
        const stock = document.querySelector(`#stock-${i}`);
        const precio = document.querySelector(`#precio-${i}`);
    
        const inventario = JSON.parse(localStorage.getItem("inventario")) || [];
    
        inventario.splice(i, 1, {
            "codigo": codigo_input.value,
            "descripcion": descripcion_input.value,
            "modelo": modelo_input.value,
            "producto": producto_input.value,
            "fabricante": fabricante_input.value,
            "estatus": estatus.value,
            "stock": stock.value,
            "precio": precio.value,
        })
    
        localStorage.setItem("inventario", JSON.stringify(inventario));
    
    
        content_table.innerHTML = '';
        //document.querySelector("tbody").innerHTML = ''
        render(inventario);
    
    }
        
});
