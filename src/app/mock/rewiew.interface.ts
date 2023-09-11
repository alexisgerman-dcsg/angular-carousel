export interface Result {
	Errors: []
  HasErrors: boolean
  Includes?: {}
  Limit: number
  Locale: string
  Offset: number
  Results: Result[]
  TotalResults: number
}

export interface Results {
Id: string
AdditionalFields?: Object
AdditionalFieldsOrder: []
AuthorId: string
BadgesOrder: string[]
CID: string
CampaignId?: string
ClientResponses:[]
CommentIds:[]
ContentLocale: string
Helpfulness: 0.5
IsFeatured: false
IsRatingsOnly: false
IsRecommended: true
IsSyndicated: false
ModerationStatus: "APPROVED"
Photos: Photo[]
ProductId: "data-gen-moppq9ekthfzbc6qff3bqokie"
ProductRecommendationIds: []
Rating: 4
RatingRange: 5
ReviewText: string
SecondaryRatings: Object
SecondaryRatingsOrder: []
SourceClient: string
SubmissionId: null
SubmissionTime: string
TagDimensions: Object
TagDimensionsOrder: []
Title: string
TotalClientResponseCount: number
TotalCommentCount: number
TotalFeedbackCount: number
TotalInappropriateFeedbackCount: number
TotalNegativeFeedbackCount: number
TotalPositiveFeedbackCount: number
UserLocation: string
UserNickname: string
Videos: []
}

export interface Photo {
  Caption: null
  Id: string
  Sizes: {
    large: { 
      Id: string
      Url: string
    normal: {
      Id: string
      Url: string
    }
  }
  thumbnail: {
    Id: string
    Url: string
    }
  }
  SizesOrder: string[]
}