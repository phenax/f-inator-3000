
const nlp= require('nlp_compromise');

module.exports= {

	transform: (string) => {

		// Convert string into nlp object
		let response= nlp.text(string);

		const terms= response.terms();


		// Add 'fucking' before nouns
		terms
			.filter(term => [ 'noun', 'infinitive', 'hashtag' ].indexOf(term.tag.toLowerCase()) > -1)
			.filter(term => term.text.indexOf('@') === -1)
			.forEach(term => {
				term.text= 'fucking ' + term.text;
			});

		// Add 'fucking' before postpositive adjectives
		terms
			.filter(term => term.tag.toLowerCase() === 'adjective')
			.filter((term, i) => i + 1 === terms.length || terms[i + 1].tag === 'Noun')
			.forEach(term => {
				term.text= 'fucking ' + term.text;
			});

		// Add tf after question words
		terms
			.filter(term => [ 'what', 'how', 'why' ].indexOf(term.text.toLowerCase()) > -1)
			.forEach(term => {
				term.text= term.text + ' the fuck';
			});

		// Back to fucking sentences
		return response.text();
	}
};
