mvc.api({
  name: "apl",
  action: "get",
  methods: {
    //     post: getOneQuestion,
    put: updateUserAnswer
    //     delete: deleteUserAnswer
  }
}, "aplQuest", function (req, aplQuest, send) {
  message = {};
  let response = {};
  plugdo.collect("getAllQuestions").get(message, (data, err) => {
    if (err !== undefined) {
      // End the current request if a error exists
      send(err);
    } else {
      response.result = data;
      var preguntas = response.result.Database[0].Table.Row[0]
      var question = aplQuest.getAll(preguntas);
      $apiResponse(question, send);
    }
  });
});

function updateUserAnswer(req) {

}