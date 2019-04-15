import React from "react";

class FormMovie extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            movieName:'',
            moviePoster:'',
            movieComment:'',
            config : {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state),
               },
                url : "http://campus-bordeaux.ovh:3001/api/quests/movies/"
        };
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    };
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    submitForm(e) {
        e.preventDefault();
        fetch(this.state.url, this.state.config)
            .then(res => res.json())
            .then(res => {
            if (res.error) {
                alert(res.error);
            } else {
                alert(`Film ajouté avec l'ID ${res}!`);
            }
            }).catch(e => {
            console.error(e);
            alert('Erreur lors de l\'ajout d\'un film');
            });
        };

    render (){
        return(
            <div>
                <h1>Saisie d'un film</h1>

                
                <form onSubmit={this.submitForm}>
                <fieldset>
                
                <div className="form-data">
                <label htmlFor="movieName">Movie Name</label>
                <input
                    type="text"
                    id="movieName"
                    name="movieName"
                    onChange={this.onChange}
                    value={this.state.movieName}
                />
                </div>

                <div className="form-data">
                <label htmlFor="moviePoster">Movie Poster</label>
                <input
                    type="text"
                    id="moviePoster"
                    name="moviePoster"
                    onChange={this.onChange}
                    value={this.state.moviePoster}
                />
                </div>

                <div className="form-data">
                <label htmlFor="movieComment">Commentaire</label>
                <input
                    type="textarea"
                    id="movieComment"
                    name="movieComment"
                    onChange={this.onChange}
                    value={this.state.movieComment}
                />
                </div>
                <hr />
                <div className="form-data">
                <input type="submit" value="Envoyer" />
                </div>
            </fieldset>

            </form>

            </div>
        )
    };
}

export default FormMovie;