export async function getTransitInfo(
  origin: string,
  destination: string
): Promise<Leg[]> {
  let response = await fetch(
    "/api/directions?" + "origin=" + origin + "&destination=" + destination
  ).then((res) => res.json());
  console.log(response);
  return parseResponse(response);
}


function parseResponse(response) {
  const unparsed = response;

  let numLegs = unparsed.routes[0]?.legs?.length;

  let current: Leg[] = []; //row corresponds to route, columns are leg lists

  for (let j = 0; j < numLegs; j++) {
    let tempSteps = [];
    for (let i = 0; i < unparsed.routes[0].legs[j].steps.length; i++) {
      let tempStep: Step = {
        start_location: [
          unparsed.routes[0].legs[j].steps[i].start_location.lat,
          unparsed.routes[0].legs[j].steps[i].start_location.lng,
        ],
        end_location: [
          unparsed.routes[0].legs[j].steps[i].end_location.lat,
          unparsed.routes[0].legs[j].steps[i].end_location.lng,
        ],
        duration: unparsed.routes[0].legs[j].steps[i].duration.value,
        distance: unparsed.routes[0].legs[j].steps[i].distance.text,
        start_address: unparsed.routes[0].legs[j].steps[i].start_address,
        end_address: unparsed.routes[0].legs[j].steps[i].end_address,
        html_instructions:
          unparsed.routes[0].legs[j].steps[i].html_instructions,
        travel_mode: unparsed.routes[0].legs[j].steps[i].travel_mode,
      };
      tempSteps.push(JSON.stringify(tempStep));
    }
    let tempLeg: Leg = {
      start_location: [
        unparsed.routes[0].legs[j].start_location.lat,
        unparsed.routes[0].legs[j].start_location.lng,
      ],
      end_location: [
        unparsed.routes[0].legs[j].end_location.lat,
        unparsed.routes[0].legs[j].end_location.lng,
      ],
      steps: tempSteps,
      duration: unparsed.routes[0].legs[j].duration.value,
      distance: unparsed.routes[0].legs[j].distance.text,
      start_address: unparsed.routes[0].legs[j].start_address,
      end_address: unparsed.routes[0].legs[j].end_address,
    };
    current.push(tempLeg);
  }
  console.log("Current", current);
  return current;
}
