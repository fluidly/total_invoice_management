# total_invoice_managment
## a kubernetes tutorial

This repo accompanies a [blog post](https://medium.com/@MostlyHarmlessD/getting-started-with-microservices-and-kubernetes-76354312b556).

## Runing the cluster

First build all of the custom docker containers:

```
$ docker build -t invoices_svc:v2 ./invoices_svc
$ docker build -t auth_svc:v1 ./auth_svc
$ docker build -t expected_date_svc:v1 ./expected_date
```

Then apply all the cluster config:

```
$ kubectl apply -f ./kube
```
