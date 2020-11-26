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
        ],
        singleMovie: null,

    },
    getters: {
        movies: state => state.movies,
        singleMovie: state => state.singleMovie,
        movie: state => state.movie,
    },
    mutations: {
        filterMovies(state, id) {
            state.singleMovie = state.movies.filter(x => x.id === id)[0]
        },
        removeComment(state, id, comId) {
            let movie = state.movies.filter(movie => movie.id === id)[0]
            let index = movie.comments.findIndex(x => x.id === comId)


            movie.comments = movie.comments.filter(comment => comment[index] !== comId)
        }
    },
    actions: {},
    modules: {}
})

// Movie gallery application
// you are given movie list
// first page of application should be movie gallery with movie cards
// each cart should have: title, year, rating, comments length, and cover image
// clicking on the card should redirect you to other page with information about particular movie
// in movie information page this info is displayed: title, year, rating, description, image and comments
// also in movie details page you should be able to add new comment and delete any comment
// (remember to validate comment inputs, so user could not add empty text as comment)
// also create modal to add new movie if needed
// make sure to use these methods at least once:
// class binding, style binding, v-for, v-if, at least one lifecycle hook
// CREATIVE TASK:
// think of some new cool feature in your application, so you could use "watch" method in it