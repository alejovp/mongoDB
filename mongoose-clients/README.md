Get all Clients

```
curl localhost:3000/clients
curl -X "GET" localhost:3000/clients
```


Create new Client

```
 curl --data "firstName=Alejandro&lastName=Vazquez&age=38" localhost:3000/clients
```

Get specific Client by ID

```
curl localhost:3000/client/58b6b9700fa85256b399c04c
```

Remove specific Client

```
curl -X "DELETE" localhost:3000/client/58b6ae0f209bf3444a4d04fa
```

Update specific Client

```
curl -X "PUT" --data "lastName=Cadenas&firstName=Eduardo&age=24"  localhost:3000/client/58b6f85d4dda5002d24604da
```