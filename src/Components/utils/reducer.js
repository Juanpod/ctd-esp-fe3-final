export const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_LIST':
            return {...state, data: action.payload}
        case 'CHANGE_THEME':
            return {...state, theme: action.payload}
        case 'ADD_FAV':
            
            let favs = [];
            try {
                const favoritesJSON = localStorage.getItem('favs')
                if (favoritesJSON) {
                  favs = JSON.parse(favoritesJSON);
                }
              } catch (error) {
                console.error('Error al analizar JSON:', error)
              }

            console.log(favs)
            const nuevosFavs = [...favs, action.payload]
            
            localStorage.setItem('favs', JSON.stringify(nuevosFavs))
            return {...state}
        
    }
}