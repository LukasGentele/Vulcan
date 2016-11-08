import Telescope from 'meteor/nova:lib';

export default schema = [`
${Telescope.graphQL.getCollectionSchemas()}
${Telescope.graphQL.getAdditionalSchemas()}

type Query {
  ${Telescope.graphQL.queries.join('\n')}
}

type Mutation {
  ${Telescope.graphQL.mutations.join('\n')}
}
`];