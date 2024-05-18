const newman = require("newman")

newman.run({
    collection: "json-collection/KasirAJa-Api.postman_collection.json",
    environment: "json-env/kasirAja.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})
