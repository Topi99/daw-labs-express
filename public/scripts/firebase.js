const config = {
  apiKey: "AIzaSyCVUiY64VQx7CoCG0BrjLOKuBn9huj6TYs",
  authDomain: "reactlista.firebaseapp.com",
  databaseURL: "https://reactlista.firebaseio.com",
  projectId: "reactlista",
  storageBucket: "reactlista.appspot.com",
  messagingSenderId: "588089288607"
};

firebase.initializeApp(config);

var inputs = document.querySelectorAll( '.hiddenFile' );
Array.prototype.forEach.call( inputs, function( input ) {
  var label	 = input.nextElementSibling,
  labelVal = label.innerHTML;
  
	input.addEventListener( 'change', function( e ) {
		var fileName = '';
		if( this.files && this.files.length > 1 )
			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
		else
			fileName = e.target.value.split( '\\' ).pop();

		if( fileName )
			label.innerHTML = fileName;
		else
			label.innerHTML = labelVal;
	});
});

document.addEventListener('DOMContentLoaded', e => {
	try {
		document.querySelector('#send').addEventListener('click', ev => {
			const inputFile = document.querySelector('.hiddenFile');
			const file = inputFile.files[0];
			const inputURL = document.querySelector('#photoURL');
			const form = document.querySelector("#sendPic");
	
			const ref = firebase.storage().ref().child(uuidv4()+'/image');
			ref.put(file).then(snapshot => {
				ref.getDownloadURL().then(url => {
					console.log(url);
					inputURL.value = url;
					form.submit();
				})
			})
		});
	} catch(e) {  }

	document.querySelector('#google').addEventListener('click', async ev => {
		console.log('Hola');
		const provider = new firebase.auth.GoogleAuthProvider();
		
		const result = await firebase.auth().signInWithPopup(provider);
		const token = result.credential.accessToken;

		const user = result.user;

		const img = document.createElement('img');
		img.src = user.photoURL;
		const p = document.createElement('p');
		p.innerHTML = user.displayName;

		document.querySelector('.data').appendChild(p);
		document.querySelector('.data').appendChild(img);
		
		console.log("Token", token, "\nUser", user);
	});
});