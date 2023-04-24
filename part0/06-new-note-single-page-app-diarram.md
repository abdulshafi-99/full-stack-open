sequenceDiagram
	participant browser
	participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa data: {content: "_abdulshafi", date: "2023-04-24T11:39:56.817Z"}
    activate server
    server-->browser: {"message":"note created"}
    deactivate server