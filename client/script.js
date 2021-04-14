const button = document.querySelector('#button')
const input = {data: 300}
const info = document.querySelector('#info')

async function request() {

    try {
        const headers = {}
        headers['Content-Type'] = 'application/json'
        input.data = document.querySelector('#input').value
        let body = JSON.stringify(input)
        
        method = 'POST'
        url = 'http://localhost:3333/api/data'

        const response = await fetch (url, {method, headers, body})
        return await response.json()
        
    } catch (e) {
        console.warn('Error: ', e.message)
    }
    
}

async function onClick() {
    const ansver = await request()
    console.log(ansver)
    info.innerHTML = "С сервера пришли данные: " + ansver
}

button.addEventListener('click', onClick)