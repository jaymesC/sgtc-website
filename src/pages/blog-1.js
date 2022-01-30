import React from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"

const StyledContainer = styled.div`
  margin-top: 2rem;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 568px) {
    margin-right: 1rem;
  }
`
const StyledHeader = styled.div`
display: flex;
justify-content: space-between;
`

const StyledH1 = styled.h1`


`
const StyledH5 = styled.h5`


`

const StyledP = styled.p`
font-style: italic;
  margin-top: 2rem;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 568px) {
    margin-right: 1rem;
  }
`


const firstBlog = () => {
  return (
    <Layout>
      <Seo title="The bride of Christ in these last days" />
      <StyledContainer>
        <StyledHeader>
          <StyledH1>The bride of Christ in these last days</StyledH1>
          <StyledH5>5 minutes read</StyledH5>
        </StyledHeader>
        <StyledP>
          The concept “Bride” from the dictionary meaning is “A newly married
          woman or a woman about to be married”. <br /> In the Gospel of John,
          John the Baptist speaks of Jesus Christ as the Bridegroom.{" "}
          <p><br />
            {" "}
            In our world today, a man lays claim to a woman when a dowry (bride
            price) has been paid and the implication of this is that you are
            forever obligated to remain faithful and committed to your vows and
            spouse that is why Society frowns at a man or woman who does not
            honour and respect the marriage vow and union.
          </p>{" "}<br />
          <p>
            {" "}
            In the Old Testament, God was the first to initiate a relationship
            with his people the children of Israel. A covenant was established
            through blood with Abraham (Gen. 15:17), confirmed through his son
            Isaac (Gen. 26:3) and reaffirmed through Jacob (Israel) forever.
            (Gen. 28:13). <br /> As part of the contract God agreed to be
            faithful and promised to set the nation of Israel apart as his Holy
            people (Lev. 20:26).{" "}
          </p>{" "}<br />
          <p>
            God also used the life and marriage of his prophet “Hosea” to
            deliver a powerful message to the people of Israel regarding their
            unfaithfulness. <br /> As Hosea's wife Gomer was unfaithful to her
            husband, returning to a life of prostitution as the body of Christ
            is doing today, God felt betrayed by Israel's infidelity (Hosea 1)
            yet he refused to give up on man. <br /> With Jesus death on the
            cross and resurrection, Jesus became the living embodiment of the
            bridegroom and a faithful husband who was willing to give up his
            life for the one he loved – (John 3:16).
          </p>{" "}<br />
          <p>
            A man of character and honour seeks a decent lady for a wife in
            2Cor. 11:2. The bible speaking “for I am jealous over you with Godly
            jealousy for I have espoused(betrothed) you to one husband, that I
            may present you a chaste virgin to Christ. <br />
            The blood of Jesus Christ was the price that was paid for us to be
            translated from the kingdom of darkness into the kingdom of God – 1
            Peter 1:18-19. “Forasmuch as ye know that you were not redeemed with
            corruptible things as silver or gold from your vain conversations
            received by tradition from your fathers.
          </p><br />
          <p>
            {" "}
            Verse 19. But with the precious blood of Christ as of a lamb without
            blemish or spot. <br />
            The greatest sacrifice ever made was his death to redeem man from
            sin and he expects something in return from man as a token of love
            appreciated and reciprocated. Most times, people are under the
            illusion that God needs them but on the contrary, we are the ones
            who needs God to survive.
          </p><br />
          <p>
            Just like an earthly marriage has stages and phases, the same
            applies to our union and love walk with Christ. The only difference
            is that in our world today a woman has to accept your proposal for
            dowry to be paid but in the case of Christ and the church, he has
            paid the price and waiting patiently for anyone willing to accept
            him and come into union with him. <br /> It is not enough to answer
            'the' altar call publicly in surrender to Jesus, it is the first
            step in this journey, carrying bible and belonging to a church
            denomination is not also enough to accord us the honour of being a
            bride of Jesus Christ until when you are born again by the
            incorruptible word of God and filled with the Holy ghost.
          </p><br />
          <p>
            We are fast running out of time that the Bride will need in order to
            prepare herself and be ready for the Marriage supper of the Lamb.{" "}
            <br /> Rev. 19:7-8 – verse 7 “let us be glad and rejoice and give
            honour to him, for the marriage of the lamb is come and his wife has
            made herself ready. <br /> Verse 8: “And to her it was granted that
            she should be arrayed in fine linen, clean and white, for the linen
            is the righteousness of the saints.
          </p><br />
          <p>
            1. Have you made yourself ready if the bridegroom would come now to
            take his bride home? from the verse above, we understand that the
            wife is to be clothed in fine linen, clean and white which means
            Chastity, Purity and Righteousness.
          </p><br />
          <p>
            v For us to meet the requirement to be a bride meet for Christ, our
            life must be an extension of Christ's. v We must live a Holy life,
            devoid of sin.
          </p><br />
          <p>v We must reject the world and its attractions.</p><br />
          <p>v We must be fully committed to Christ.</p><br />
          
          <p>
            In the face of the current realities bedeviling our nation and the
            entire World, It is a clear pointer that the Bridegroom cometh and
            he is coming for a Church without spots or wrinkle. <br />I persuade
            you to take heed to the Voice of the Spirit (Rev 10:7) in these last
            days according to what you have read from this leaflet. Take a bold
            step now and come out of the world and declare your stand in Christ
            and with Christ.
          </p><br />
          <p>
            The Apostolic days are here again with genuine Pentecostal doctrines
            backed by God. Do not be left out of this last move of God among the
            Gentiles. God bless you richly.
          </p>
        </StyledP>
      </StyledContainer>
    </Layout>
  )
};

export default firstBlog;
