/*
  Event Controller Class
  --------------------------

  This is our controller code for the event view goes.
  This is where we reach out to get all of the things our
  view needs to function (like data from APIs) and
  pass it into the view.

  STEP 1: Save the id param from $stateParams to
          this.id

  STEP 2: Create a new method getData() that makes
          a $http.get call to `http://gateway.marvel.com:80/v1/public/events/<event id here>?apikey=<api key here>`

          Remember, our class is going to make an object. That means we
          have to use our _internal_ name for $http, which will be
          this._$http.

          The method should have a .then() which gets the response.
          Remember, this is different than fetch. response.data will
          contain the data as JSON without _any_ conversion step. You
          can just start using it.

          Save title, description, characters and image as properties on this.
          Remember that you have to assemble image from the thumbnail
          properties on the response.

  STEP 3: Call getData() to make your AJAX request to the Marvel API.
          Make sure you do this after you setup all of your variables
          in your constructor.

          You don't need to respond to it. It's going to set some properties
          on this on its own. Just call it and let it go.

*/

// class EventsController {
//
// 	constructor($http, $stateParams) {
//     this._$http = $http;
// 		this.id = $stateParams.id;
// 		this.getData();
// 	}
//
//   getData() {
// 		this._$http
//       .get(`http://gateway.marvel.com:80/v1/public/events?apikey=2a4fd1138bd131ee49b25af36d5f763a
// ${this.id}`)
//       .then ((response) => {
//       console.log(response);
//       this.id = response.data.id;
//
//     });
//   }
//
// }
//
// export default EventsController


// class EventsController {
//
// 	constructor($http, $stateParams) {
//     this._$http = $http;
// 		this.id = $stateParams.id;
//
// 		this.getData();
// 	}
//
//   getData() {
//
// 		this._$http
// 			.get(`http://gateway.marvel.com:80/v1/public/events/${this.id}?apikey=2a4fd1138bd131ee49b25af36d5f763a`)
// 			.then((response) => {
//
// 				this.title = response.data.data.results[0].title;
// 				this.description = response.data.data.results[0].description;
// 				this.image = `${response.data.data.results[0].thumbnail.path}.${response.data.data.results[0].thumbnail.extension}`;
// 		});
// 		this._$http
// 			.get(`http://gateway.marvel.com:80/v1/public/events/${this.id}/characters?apikey=6e7bd33438a14b84d91097cd3cfc46b5`)
// 			.then((response) => {
// 				this.characters = response.data.data.results;
// 		});
//   }
// }
//
// export default EventsController;

class EventsController {

	constructor($http, $stateParams) {
    this._$http = $http;
		this.param = $stateParams.param;
	}

  getData() {
		this._$http
		.get(`http://gateway.marvel.com:80/v1/public/events/${this.param}&apikey=1c51377e8242564595ee97800ae287c7`)
		.then((response) => {
			console.log(response);

		});
  }

}

export default EventsController
