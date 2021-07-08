Vue.config.devtools = true;


// Chiamare l'api per poter generare un numero randomico (che ci restuisce il backend)
// e mostrare questo numero a schermo.

// => dobbiamo popolare un data (che all'inizio è 0), e mostrarlo a schermo {{ number }}

new Vue(
    {
        el: '#app',
        data: {
            emails: []
        },
        created() { },
        methods: {

            getEmail: function () {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {  // appena il server ci risponde, si attiva questa funzione
                    this.emails.push(response.data.response);
                });
            }

        }
    });


