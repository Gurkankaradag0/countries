import { gql } from '@apollo/client'

export const getCountries = gql`
    query Query {
        countries {
            code
            continent {
                code
                name
            }
            currency
            emoji
            emojiU
            languages {
                code
                name
                native
                rtl
            }
            name
            native
            phone
            states {
                code
                name
            }
        }
    }
`
