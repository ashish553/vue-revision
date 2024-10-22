<template>
  <div>
    <RenderTest />
    <RouterLink to="/about">About Us</RouterLink>
    <br />
    <RouterLink to="/">Home</RouterLink>

    <router-view />
  </div>
</template>

<script>
import RenderTest from './components/RenderTest';

// import Comments from './components/Comments.vue';


export default {
  name: 'App',
  components: {
    // Comments,
    RenderTest,
  },
  data() {
    return {
      commentsData: [
        {
            "username": "userAlpha",
            "comment": "This is the first comment, meant to initiate a deeply nested discussion. Let's see how it unfolds.",
            "replies": [
                {
                    "username": "replyAlpha1",
                    "comment": "This is the first reply to the first comment. Let's dive deeper.",
                    "replies": [
                        {
                            "username": "replyAlpha1_1",
                            "comment": "Here’s a reply to the first reply, starting to go deeper.",
                            "replies": [
                                {
                                    "username": "replyAlpha1_1_1",
                                    "comment": "Another layer deep. How far can we go?",
                                    "replies": [
                                        {
                                            "username": "replyAlpha1_1_1_1",
                                            "comment": "Going even deeper, just to see how the structure holds up.",
                                            "replies": [
                                                {
                                                    "username": "replyAlpha1_1_1_1_1",
                                                    "comment": "Deepest level reached so far. Will the code manage this complexity?"
                                                },
                                                {
                                                    "username": "replyAlpha1_1_1_1_2",
                                                    "comment": "Another reply at this deep level, testing handling of multiple entries."
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "username": "replyAlpha1_1_2",
                                    "comment": "A parallel branch at a slightly shallower level to check branching."
                                }
                            ]
                        },
                        {
                            "username": "replyAlpha1_2",
                            "comment": "Returning to a higher level in the same branch, ensuring no confusion occurs."
                        }
                    ]
                },
                {
                    "username": "replyAlpha2",
                    "comment": "This is a second reply to the original comment, testing another branch of the tree.",
                    "replies": [
                        {
                            "username": "replyAlpha2_1",
                            "comment": "A reply to the second reply, starting a new nested chain.",
                            "replies": [
                                {
                                    "username": "replyAlpha2_1_1",
                                    "comment": "Further nested reply under the second branch.",
                                    "replies": [
                                        {
                                            "username": "replyAlpha2_1_1_1",
                                            "comment": "Going deep again, parallel to the first branch."
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "username": "userBeta",
            "comment": "This is another initial comment to test with less complexity but still involves some nested replies.",
            "replies": [
                {
                    "username": "replyBeta1",
                    "comment": "Replying here with a moderately complex structure.",
                    "replies": [
                        {
                            "username": "replyBeta1_1",
                            "comment": "Nested reply, but not too deep."
                        }
                    ]
                },
                {
                    "username": "replyBeta2",
                    "comment": "Second reply to the second comment, testing simple nesting."
                }
            ]
        },
        {
            "username": "standaloneUser",
            "comment": "This comment has no replies, meant to check how well the system handles isolated comments."
        },
        {
          "username": "userGamma",
          "comment": "Initiating a third chain of comments with its own nested structure.",
          "replies": [
            {
              "username": "replyGamma1",
              "comment": "First reply in this chain, testing a new structure.",
              "replies": [
                {
                  "username": "replyGamma1_1",
                  "comment": "Going deeper here too, but not as much as the first example."
                }
              ]
            },
            {
              "username": "replyGamma2",
              "comment": "A parallel reply at the first level, ensuring sibling nodes are handled correctly."
            },
            {
              "username": "replyGamma2",
              "comment": "A parallel reply at the first level, ensuring sibling nodes are handled correctly.",
              "replies": [
                {
                  "username": "replyGamma1_1",
                  "comment": "Going deeper here too, but not as much as the first example."
                },
                {
                  "username": "replyGamma1_1",
                  "comment": "Going deeper here too, but not as much as the first example."
                }
              ]
            }
          ]
        }
      ]
    }
  },
  mounted() {
    console.log(RenderTest.render());
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

</style>
