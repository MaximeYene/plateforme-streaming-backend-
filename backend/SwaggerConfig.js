
const SwaggerConfig={
    "openapi": "3.0.0",
    "info": {
      "title": "Gestion des fichiers audio API",
      "version": "1.0.0",
      "description": "API pour gérer les fichiers audio"
    },
    "servers": [
      {
        "url": "http://localhost:3000/api"
      }
    ],
    "paths": {
      "/api/songs/upload": {
        "post": {
          "summary": "Téléchargement de fichiers audio",
          "requestBody": {
            "content": {
              "multipart/form-data": {
                "schema": {
                  "properties": {
                    "audioFile": {
                      "type": "string",
                      "format": "binary"
                    },
                    "title": {
                      "type": "string"
                    },
                    "artist": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Fichier audio téléchargé avec succès"
            },
            "400": {
              "description": "Aucun fichier audio n'a été téléchargé"
            },
            "500": {
              "description": "Erreur lors du traitement du fichier audio"
            }
          }
        }
      },
      "/api/songs/audio": {
        "get": {
          "summary": "Récupération d'un fichier audio par titre",
          "parameters": [
            {
              "name": "title",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            },
            {
              "name": "artist",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Succès de la récupération du fichier audio"
            },
            "404": {
              "description": "Fichier audio non trouvé"
            },
            "500": {
              "description": "Erreur lors de la récupération du fichier audio"
            }
          }
        }
      },
      "/api/songs/download": {
        "get": {
          "summary": "Téléchargement d'un fichier audio par titre",
          "parameters": [
            {
              "name": "title",
              "in": "query",
              "required": true,
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Téléchargement du fichier audio réussi"
            },
            "404": {
              "description": "Fichier audio non trouvé"
            },
            "500": {
              "description": "Erreur lors du téléchargement du fichier audio"
            }
          }
        }
      }
    }
  }

  module.exports=SwaggerConfig;
  