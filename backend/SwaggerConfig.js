
const SwaggerConfig = {
  "openapi": "3.0.0",
  "info": {
    "title": "Gestion des fichiers audio API",
    "version": "1.0.0",
    "description": "API pour gérer les fichiers audio"
  },
  "servers": [
    {
      "url": "http://localhost:3000"
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
    "/api/saveSearch": {
      "post": {
        "summary": "Sauvegarde des recherches de fichiers audio",
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
            "description": "'Recherche enregistrée avec succès"
          },
          "500": {
            "description": "Erreur lors de l'enregistrement de la recherche"
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
    "/api/songs/allAudioByArtist": {
      "get": {
        "summary": "Récupération de tous les fichiers audio d un artiste lors d'une recherche",
        "parameters": [
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
          "404": {
            "description": "fichiers audio non trouvés"
          },
          "500": {
            "description": "Erreur lors de la recuperation des fichiers audio"
          }
        }
      }
    },
    "/api/songs/allAudioByAlbum":{
      "get": {
        "summary": "Récupération de tous les fichiers audio en fonction du nom de l'abum lors d'une recherche",
        "parameters": [
          {
            "name": "album",
            "in": "query",
            "required": true,
            "schema": {
              "type": "string"
            }
          }
        ],
        "responses": {
          "404": {
            "description": "fichiers audio non trouvés"
          },
          "500": {
            "description": "Erreur lors de la recuperation des fichiers audio"
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
    },
    '/api/songs/deleteByTitle': {
      "delete": {
        "summary": "Suppression d'un fichier audio par titre",
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
            "description": "Suppression du fichier audio réussie"
          },
          "404": {
            "description": "Fichier audio non trouvé"
          },
          "500": {
            "description": "Erreur lors de la suppression du fichier audio"
          }
        }
      }
    }
  }
}

module.exports = SwaggerConfig;
