export const config = {
  domainSource: "https://d1757b15-7b01-4da9-80e6-7a882e779306.weweb-preview.io", // Your WeWeb app preview link
  patterns: [
      {
          pattern: "/artikel/[^/]+",
          metaDataEndpoint: "https://xpbn-wusf-50q5.f2.xano.io/api:_vMbLsQj/1_artikelen/metadata/{artikel_id}"
      },
      {
          pattern: "/team/profile/[^/]+",
          metaDataEndpoint: "https://xeo6-2sgh-ehgj.n7.xano.io/api:LjwxezTv/team/profile/{profile_id}/meta"
      }
      // Add more patterns and their metadata endpoints as needed
  ]
};
