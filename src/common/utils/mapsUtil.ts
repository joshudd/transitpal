export async function getTransitInfo(origin: string, destination: string): Promise<Leg[]> {
    let response = await fetch('/api/directions?' + 
        'origin=' + origin + 
        '&destination=' + destination, 
    ).then((res) => res.json())
    console.log(response)
    return parseResponse(response);
}

type Leg = {
    start_location: [number, number];
    end_location: [number, number];
    duration: number;
    distance: string;
    start_address: string;
    end_address: string;
};

function parseResponse(response) {
    const unparsed = response

    let numLegs = unparsed.routes[0].legs.length;

    let current: Leg[] = []; //row corresponds to route, columns are leg lists

    for (let j = 0; j < numLegs; j++) {
        let temp: Leg = {
            start_location: [
                unparsed.routes[0].legs[j].start_location.lat,
                unparsed.routes[0].legs[j].start_location.lng,
            ],
            end_location: [
                unparsed.routes[0].legs[j].end_location.lat,
                unparsed.routes[0].legs[j].end_location.lng,
            ],
            duration: unparsed.routes[0].legs[j].duration.value,
            distance: unparsed.routes[0].legs[j].distance.text,
            start_address: unparsed.routes[0].legs[j].start_address,
            end_address: unparsed.routes[0].legs[j].end_address,
        };
        current.push(temp);
    }
    console.log("Current", current);
    return current;
}
