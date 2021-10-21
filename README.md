# tls-app

A simple JS app to test TLS passthrough on Kubernetes.

See the [examples/](examples) directory for reference. The manifests in that directory assume that a few add-ons are installed in the cluster:

- [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/)
- [cert-manager](https://cert-manager.io/)
- [ExternalDNS](https://github.com/kubernetes-sigs/external-dns)

## Authors

**Andre Silva** - [@andreswebs](https://github.com/andreswebs)

## License

This project is licensed under the [Unlicense](UNLICENSE.md).
