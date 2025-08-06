import { gql } from "@apollo/client";

const pmsRooms = gql`
  query PmsRooms(
    $pipelineId: String!
    $endDate1: Date
    $endDate2: Date
    $startDate1: Date
    $startDate2: Date
  ) {
    pmsRooms(
      pipelineId: $pipelineId
      endDate1: $endDate1
      endDate2: $endDate2
      startDate1: $startDate1
      startDate2: $startDate2
    ) {
      _id
      name
      products
      stage {
        code
      }
    }
  }
`;

const deals = gql`
  query Deals(
    $initialStageId: String
    $stageId: String
    $limit: Int
    $ids: [String]
    $parentId: String
    $pipelineId: String
    $pipelineIds: [String]
    $customerIds: [String]
    $companyIds: [String]
    $productIds: [String]
    $search: String
    $startDate: String
    $endDate: String
    $sortField: String
    $sortDirection: Int
  ) {
    deals(
      initialStageId: $initialStageId
      stageId: $stageId
      limit: $limit
      _ids: $ids
      parentId: $parentId
      pipelineId: $pipelineId
      pipelineIds: $pipelineIds
      customerIds: $customerIds
      companyIds: $companyIds
      productIds: $productIds
      search: $search
      startDate: $startDate
      endDate: $endDate
      sortField: $sortField
      sortDirection: $sortDirection
    ) {
      products
      unUsedAmount
      amount
      customFieldsData
      _id
      name
      companies
      customers
      stage
      labels
      isComplete
      startDate
      closeDate
      createdAt
      modifiedAt
      score
      number
      stageChangedDate
      tagIds
      customProperties
      status
      branchIds
      branches {
        _id
        title
        parentId
        supervisorId
        code
        order
        userIds
        userCount
        status
        address
        radius
        workhours
        phoneNumber
        email
        links
      }
      departmentIds
      assignedUserIds
      order
      createdUserId
      number
    }
  }
`;

const dealDetail = gql`
  query DealDetail($id: String!) {
    dealDetail(_id: $id) {
      _id
      customers {
        _id
        lastName
        firstName
      }
      products
      stageId
      name
      description
      labelIds
      paymentsData
      tagIds
      number
    }
  }
`;

const dealPreview = gql`
  query DealPreview($id: String!) {
    dealDetail(_id: $id) {
      customers {
        _id
        lastName
        firstName
      }
      description
      labelIds
      paymentsData
    }
  }
`;

const dealFullDetail = gql`
  query DealFullDetail($id: String!) {
    dealDetail(_id: $id) {
      _id
      stageId
      name
      customers {
        _id
        lastName
        firstName
        primaryPhone
        primaryEmail
      }
      products
      labels {
        name
      }
      paymentsData
      amount
      tagIds
      number
    }
  }
`;

const salesPipelineLabels = gql`
  query SalesPipelineLabels($pipelineId: String) {
    salesPipelineLabels(pipelineId: $pipelineId) {
      _id
      name
    }
  }
`;

const stages = gql`
  query SalesStages($pipelineId: String) {
    salesStages(pipelineId: $pipelineId) {
      _id
      code
    }
  }
`;

const paymentTypes = gql`
  query PaymentTypes($pipelineId: String!) {
    salesPipelineDetail(_id: $pipelineId) {
      paymentTypes
    }
  }
`;

const tags = gql`
  query Tags(
    $type: String
    $searchValue: String
    $tagIds: [String]
    $parentId: String
    $ids: [String]
    $excludeIds: Boolean
    $page: Int
    $perPage: Int
  ) {
    tags(
      type: $type
      searchValue: $searchValue
      tagIds: $tagIds
      parentId: $parentId
      ids: $ids
      excludeIds: $excludeIds
      page: $page
      perPage: $perPage
    ) {
      _id
      name
      type
      colorCode
      createdAt
      objectCount
      totalObjectCount
      parentId
      order
      relatedIds
    }
  }
`;

const queries = {
  pmsRooms,
  deals,
  salesPipelineLabels,
  stages,
  dealDetail,
  dealFullDetail,
  paymentTypes,
  dealPreview,
  tags,
};
export default queries;
