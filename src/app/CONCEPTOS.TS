// Al utilizar flex convierte a sus hijos en clases flexibles
// Se generar dos ejes uno principal(main) otro secundario (cross)
// Con flex direccion manipulo el eje
// Las propiedades de display no se heredan, osea se puede anidar los flex
// space beetewwn reparte el espacio entre los elementos, esto tmb se lo puede hacer con (margin-rigth auto) y si agrando la ventana se reclacula
// around en cambio distribuye los espacios alrededor de los elementos es como q les diera un margin como si fuera un margin
// Con flex-direccionn cambio de ejes
// Con aling-item alinea los ejes con respecto al eje seecundario  (stech es la propiedad por defecto y rellena todo el espacio en el eje secundario )
// aling-items : basilene alinea en la linea de base
// flexbox intenta meter todo en una sola linea, pero con flex graw hace q salte a la segunda linea cuando no hay espacio




// OJO NUNCA SE COLAPSA LOS MARGENES PERO SI LAS CAJAS
// LOS BORDES Y LOS PADDING SUMAN PARA CALCULAR EL TAMAO TOTAL DE LA CAJA
// SALVO BOX-SINSIN: BORDER BOX SE CALCUALN DENTRO DE LA CAJA


//FLEX-BASICS ES =AL WITHD ES LO MISMO
//CON FLEX-BASICS- SE OCUPA SOLO EL CONTENIDO
// FLEX-GROW ES COMO CRRECE EL ELEMENTO CON RESPECTO A SU FLEX-BASICS
// FLEX-GROW-1 CRECE EN ANCHO HASTA LLENAR LE ESPACIO
// FLEX-GROW-2  CRECE PERO NO SIGNIFICA Q SEA EL DOBLE DEL QUETIENE UNO, ESE NUMERO ES EL FACTOR DE CRECIMIENTO
// LOS FLE-GROW FUNCIONAN EN FUNCION DEL ESPACIO DISPONIBLE
// SE SUMA TODOS LOS FACTPRES DE CRECIMIENTO Y SE DIVIDE PARA ESPACIO DISPONIBLE
// Si quiero q un elemento no crezca se pone grow-0 y los otros crezcan se pone grow-1


//flex shrink es lo cantario porque se encoje
// Esto se utiliza cuando el espacio disponible es negativo (cuando la suma de sus contenidos es mayor q el espacio disponible)
// los items por defecto tienen el valor de 1 estoquiere decir que se encoje hasta que el espacio disponible sea igual a cero
// pOr defecto grow esta en cero y shrink esta en 1
// flex: grow shrink basic es la union de todos
// por defecto grow= 0; shrink=1; basic=auto
// flex none = 0,0,auto
// flex auto= 1,1,auto
// Se puede poner con % haciendo flex=60, significa el 60%
// Margin-top:auto envia al boton al ultimon

