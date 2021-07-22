Feature: login teste com json-schema

    Scenario: Fazer uma solicitação para serverest api e validar o login
        Quando solicitar dados para /login
        Entao deve ser retornado o schema "post-login" com status 200

    Scenario Outline: consultar login com senha válida e inválida na API serverest
        When logar com usuario do tipo "<type>"
        Then deve ser retornado o schema "post-login" com status <status>
        Examples:
            | type         | status |
            | invalid      | 400    |
            | Unauthorized | 401    |


