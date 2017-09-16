/**
 * Created by Yalovich on 19/08/2017.
 */


module.exports = (function App()
{
	/**
	 * Return restaurant menu
	 * @return Promise
	 */
	function getBands()
	{
		return new Promise(function(resolve, reject) {

			resolve([{
				name: "Snatam Kaur",
				image: "../src/assets/snatam.jpeg",
				birthday: "1986-02-08",
				video: "https://www.youtube.com/embed/LYDPdd1MOcA"
			}, {
				name: "Uma Mohan",
				image: "../src/assets/mohan.jpeg",
				birthday: "1941-07-22",
				video: "https://www.youtube.com/embed/1I23gABHrnM"
			}, {
				name: "Deva Premal",
				image: "../src/assets/premal.jpeg",
				birthday: "1987-06-17",
				video: "https://www.youtube.com/embed/BSmToj9VZ4s"
			}]);

		});
	}

	return {
		getBands:getBands
	}
})();