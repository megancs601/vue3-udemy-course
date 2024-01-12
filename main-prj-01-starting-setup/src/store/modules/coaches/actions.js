export default {
  registerCoach(cxt, payload) {
    const coachData = {
      id: cxt.rootGetters.userId,
      firstName: payload.first,
      lastName: payload.last,
      description: payload.desc,
      hourlyRate: payload.rate,
      areas: payload.areas,
    };

    cxt.commit('registerCoach', coachData);
  },
};
