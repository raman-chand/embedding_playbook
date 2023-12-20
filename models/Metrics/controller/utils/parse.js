import { JSONPath } from 'jsonpath-plus';


 // return an minimal representation of subscriptions
export const parseSubscriptions = (subscriptionsResponse) => {
  const subscriptions = {};

  // Retrieve properties using JSONPath
  const subscription_ids = JSONPath({ path: '$.subscriptions[*].id', json: subscriptionsResponse }); // indexing array
  const metric_ids = JSONPath({ path: '$.subscriptions[*].metric_id', json: subscriptionsResponse });

  // Iterate through indexing array and create leaves in the return object
  subscription_ids.forEach((subscription, index) => {
    subscriptions[index] = {
      subscription_id: subscription, 
      metric_id: metric_ids[index], // Add the corresponding properties by index
    };
  });
  return subscriptions;
}


 // return an minimal representation of specifications
export const parseSpecifications = (specificationsResponse) => {
  const specifications = {};

  // Retrieve properties using JSONPath
  const ids = JSONPath({ path: '$.[*].id', json: specificationsResponse }); // indexing array
  const specification = JSONPath({ path: '$.[*].specification', json: specificationsResponse });
  const definition_id = JSONPath({ path: '$.[*].definition_id', json: specificationsResponse });
  const is_default = JSONPath({ path: '$.[*].is_default', json: specificationsResponse });

  // Iterate through indexing array and create leaves in the return object
  ids.forEach((id, index) => {
    specifications[index] = {
      specification_id: id,
      specification: specification[index], // Add the corresponding properties by index
      definition_id: definition_id[index],
      is_default: is_default[index],
    }
  });
  return specifications;
}


 // return an minimal representation of core metrics
 export const parseDefinitions = (definitionsResponse) => {
  const definitions = {};

  // Retrieve properties using JSONPath
  const names = JSONPath({ path: '$.[*].metadata.name', json: definitionsResponse }); // indexing array
  const descriptions = JSONPath({ path: '$.[*].metadata.description', json: definitionsResponse });
  const id = JSONPath({ path: '$.[*].metadata.id', json: definitionsResponse });
  const definition = JSONPath({ path: '$.[*].specification', json: definitionsResponse });
  const extension_options = JSONPath({ path: '$.[*].extension_options', json: definitionsResponse });
  const representation_options = JSONPath({ path: '$.[*].representation_options', json: definitionsResponse });
  const insights_options = JSONPath({ path: '$.[*].insights_options', json: definitionsResponse });


  // Iterate through indexing array and create leaves in the return object
  names.forEach((name, index) => {
    definitions[index] = {
      name: name,
      description: descriptions[index], // Add the corresponding properties by index
      id: id[index],
      definition: definition[index], 
      extension_options: extension_options[index],
      representation_options: representation_options[index],
      insights_options: insights_options[index],
    };
  });
  return definitions;
}


 // return a minimal representation of metrics
export const parseMetrics = (subscriptions, scoped_metrics, core_metrics) => {
  const metrics = {};

  // Retrieve properties using JSONPath
  const names = JSONPath({ path: '$.subscriptions[*].id', json: subscriptions }); // indexing array
  const id = JSONPath({ path: '$.subscriptions[*].id', json: subscriptions });

  // Iterate through indexing array and create leaves in the return object
  names.forEach((name, index) => {
    metrics[index] = {
      name: name, 
      id: id[index], // Add the corresponding properties by index
    };
  });

  console.log('metrics', metrics);
  return metrics;
}
