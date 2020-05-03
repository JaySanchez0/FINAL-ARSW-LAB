## Laboratorio final ARSW

### Integrantes:
- Jeisson Sanchez
- Mateo Gonzalez

### Algunos comandos
~~~
    Todas las llaves y valores: keys patron

    Limpiar todos los registros: flushall

    eliminar un registro especifico: del key

    actualizar llave: set key value

    consultar llave: get key

~~~

### Paquetes para correr function app
Instalar dentro del directorio de la function app

- Big-Integer
- redis
- Blue Bird

### Instalar paquetes para correr local la app
~~~
    npm install -g azure-functions-core-tools
~~~

~~~
    npm install -g azure-functions-core-tools@3
~~~

### Run function app

~~~
    func start
~~~


La base de datos redis que se utiliza para todos los siguientes expermentos esta alojada en azure

### Casos de analizis localhost

**Tiempo de repuesta n=100 sin memoria**

![img](images/localhost/clearn100.PNG)

![img](images/localhost/resp100sinmemo.PNG)

**Tiempo:** 1 min 0.78 seg

**Tiempo de respuesta n=100 con memoria**

![img](images/localhost/100memo.PNG)

![img](images/localhost/resp100memo.PNG)

**Tiempo:** 973 ms

**Tiempo de respuesta n=200 con 100 en memoria**

![img](images/localhost/100memo.PNG)

![img](images/localhost/n200memo100.PNG)

**Tiempo:** 1 min 8.58 seg

**Tiempo de repuesta para n=200 sin memoria**

![img](images/localhost/clearmemo.PNG)

![img](images/localhost/200sinmemo.PNG)

*Tiempo:* 2 min 47.58 seg

### Casos de analizis localhost

**Tiempo de repuesta n=100 sin memoria**

![img](images/azure/n100sinmemoria.PNG)

![img](images/azure/respn100sinmemoria.PNG)

**Tiempo:** 1 min 12.30 s

**Tiempo de respuesta n=100 con memoria**

![img](images/azure/respn100sinmemoria.PNG)

**Tiempo:** 2.02 seg

**Tiempo de respuesta n=200 con 100 en memoria**

![img](images/azure/n200con100memo.PNG)

**Tiempo:** 1 min 12.97 seg

**Tiempo de repuesta para n=200 sin memoria**

![img](images/azure/clean200.PNG)

![img](images/azure/respn200.PNG)

**Tiempo:** 2 min 24.96 seg