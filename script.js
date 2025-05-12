const contents = {
  topic1: `
    <h2>Research Topic 1: Climate Change</h2>
    <p>This study investigates how rising temperatures affect polar wildlife and ecosystems. Data collected from 10-year satellite trends and field research.</p>
  `,
  topic2: `
    <h2>Research Topic 2: Artificial Intelligence</h2>
    <p>This research explores AI in healthcare: diagnosis support, ethical implications, and machine learning efficiency in patient monitoring.</p>
  `,
  topic3: `
    <h2>Research Topic 3: Public Health Nutrition</h2>
    <p>A study evaluating plant-based diets in urban populations and their influence on heart disease and diabetes prevention.</p>
  `
};

function showContent(topic) {
  document.getElementById("content").innerHTML = contents[topic];
}