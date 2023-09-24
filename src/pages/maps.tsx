// // /** For 201 */
// // type UserCreated = { id: string; name: string };

// // /** For 400 */
// // type BadRequest = { code: "bad_request"; message: string };

// // /** Response type intersection */
// // type UserResponse =
// //   | (Omit<Response, "json"> & {
// //       status: 201;
// //       json: () => UserCreated | PromiseLike<UserCreated>;
// //     })
// //   | (Omit<Response, "json"> & {
// //       status: 400;
// //       json: () => BadRequest | PromiseLike<BadRequest>;
// //     });

// // /** Marshalling stream to object with narrowing */
// // const marshalResponse = (res: UserResponse) => {
// //   if (res.status === 201) return res.json();
// //   if (res.status === 400) return res.json();
// //   return Error("Unhandled response code");
// // };

// // /** Coerce Response to UserResponse */
// //  const responseHandler = (response: Response) => {
// //    const res = response as UserResponse;
// //    console.log(response);
// //    return marshalResponse(res);
// // };
// export default function getTransitInformation(origin: String, destination: String) {
//     const data = fetch(`https://maps.googleapis.com/maps/api/directions/json?` +
//         "origin=" + origin +
//         "&destination=" + destination +
//         "&key=" + process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
//     ).then((res) => {console.log(res)} );
// }

// // import { Loader } from "@googlemaps/js-api-loader"

// // const loader = new Loader({
// //     apiKey: "{process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}",
// //     version: "weekly",
// //   });
  
// //   loader.load().then(async () => {
// //     const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
// //     // let map = new Map(document.getElementById("map") as HTMLElement, {
// //     //   center: { lat: -34.397, lng: 150.644 },
// //     //   zoom: 8,
// //     // });

// //   });

// // const {google} = require('googleapis');

// // const loader = new Loader({
// //     apiKey: "${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}",
// //     version: "weekly",
// //     // ...additionalOptions,
// //   });
  
// {/* <script src="https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}"></script> */}

// // let map: google.maps.Map;
// // async function initMap(): Promise<void> {
// //     const loader = new Loader({
// //         apiKey: "YOUR_API_KEY",
// //         version: "weekly",
// //     });
// //     const google = await loader.load();
// //     const { Map } = google.maps;
// //     map = new Map(document.getElementById("map") as HTMLElement, {
// //         center: { lat: -34.397, lng: 150.644 },
// //         zoom: 8,
// //     });
// // }

// // initMap();

// // export default function getTransitInformation(origin: String, destination: String) {
// //     let autocomplete = new google.maps.places.Autocomplete(origin);
// //     function initMap() {
// //         autocomplete.bindTo('bounds', map);
// //         var infowindow = new google.maps.InfoWindow();
// //         var infowindowContent = document.getElementById('infowindow-content');
// //         infowindow.setContent(infowindowContent);
// //         var marker = new google.maps.Marker({
// //         map: map,
// //         anchorPoint: new google.maps.Point(0, -29)
// //     });
    
// //     return (
// //         <div id="map">
// //     <script
// //         src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initMap"
// //         async defer></script>
// //         </div>
// //     )
// // }