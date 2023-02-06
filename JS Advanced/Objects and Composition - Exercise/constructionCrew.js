function constructionCrew(obj) {

    if (obj.dizziness) {

        let sum = (obj.weight * 0.1) * obj.experience;

        obj.levelOfHydrated += sum;

    }

    return obj;

}

console.log(constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
}));