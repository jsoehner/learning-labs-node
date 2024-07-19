# Learning Labs: Build Secure and Minimal Images with Chainguard Node Images

This repo contains the code for a simple Node TODO application. It is designed to be used in the Chainguard
Learning Labs course, where we will walk through converting it to use Chainguard Images.

There are different versions of this code in various branches:

 - `main` is a standard Docker build with the `node` image
 - `chainguard_node` is a standard Docker build with the `cgr.dev/chainguard/node` image
 - `chainguard-multistage-node` is a multistage Docker build 
