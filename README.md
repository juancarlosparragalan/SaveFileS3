# SaveFileS3

## AWS Lambda para almacenar archivos en Amazon S3

 Lambda Javascript code for save files on S3 bucket
 Este es un código de muestra para una función Lambda de AWS que recibe un archivo de una solicitud de API Gateway y lo almacena en un bucket de Amazon S3. Este código está escrito en JavaScript y utiliza el paquete AWS SDK para Node.js.

## Uso

Una vez que la función Lambda se ha desplegado con éxito, puede probarla enviando una solicitud POST a la URL de la API Gateway asociada con la función Lambda.

La función Lambda recibirá la solicitud, extraerá el archivo adjunto y lo almacenará en el bucket de Amazon S3 suministrado en la petición.
