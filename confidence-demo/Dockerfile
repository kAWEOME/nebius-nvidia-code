ARG NODE_IMAGE
FROM ${NODE_IMAGE}
WORKDIR /app
COPY confidence-demo/ ./confidence-demo/
USER node
EXPOSE 3000
CMD ["node", "confidence-demo/src/server.mjs"]
