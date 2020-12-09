import {createStore} from 'vuex'

export default createStore({
    state: {
        movies: [
            {
                image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
                title: "Parasite",
                id: "1",
                year: "2019",
                rating: "8.6",
                description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
                comments: []
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_UX182_CR0,0,182,268_AL_.jpg",
                title: "The Queen's Gambit ",
                year: "2020",
                id: "2",
                rating: "8.8",
                description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA. But child stardom comes at a price.",
                comments: [{
                    name: "John",
                    comment: "So boring, i fall asleep to it and hibernated through whole winter"
                }]
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg",
                title: "Joker",
                id: "3",
                year: "2019",
                rating: "8.5",
                description: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.",
                comments: [
                    {
                        name: "Marry",
                        comment: "Put on a happy face :)"
                    },
                    {
                        name: "Batman",
                        comment: "My parents was not impressed with this"
                    },
                ]
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg",
                title: "The Godfather",
                id: "4",
                year: "1972",
                rating: "9.2",
                description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                comments: []
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR1,0,182,268_AL_.jpg",
                title: "Pulp Fiction",
                id: "5",
                year: "1994",
                rating: "8.9",
                description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                comments: [
                    {
                        name: "Jane",
                        comment: "Soundtrack is epic"
                    },
                    {
                        name: "John",
                        comment: "Nice job!"
                    },
                    {
                        name: "Katrin",
                        comment: "Recommended!"
                    }
                ]
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg",
                title: "The Shining",
                id: "6",
                year: "1980",
                rating: "8.4",
                description: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
                comments: [{
                    name: "Jane",
                    comment: "Soundtrack is epic"
                }]
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_UX182_CR0,0,182,268_AL_.jpg",
                title: "The Holiday",
                id: "7",
                year: "2006",
                rating: "6.9",
                description: "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
                comments: []
            },
            {
                image: "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_UX182_CR0,0,182,268_AL_.jpg",
                title: "The Mandalorian ",
                id: "8",
                year: "2020",
                rating: "8.7",
                description: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
                comments: []
            },
        ],
        singleMovie: null,
    },
    getters: {
        movies: state => state.movies,
        singleMovie: state => state.singleMovie,
        colors: state => state.colors,
        comments: state => state.comments
    },
    mutations: {
        filterMovies(state, id) {
            state.singleMovie = state.movies.filter(x => x.id === id)[0]
        },
        removeComment(state, data) {
            let movieIndex = state.movies.findIndex(movie => movie.id === data.id)
            state.movies[movieIndex].comments = state.movies[movieIndex].comments.filter((item, index) => index !== data.index)
        },
        editMovie(state, movie) {
            state.movies = state.movies.filter(x => x.id !== movie.id)
            state.movies.unshift(movie)
        }
    }
})