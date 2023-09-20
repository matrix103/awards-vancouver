import React from 'react';
import styles from "./Rules.module.scss"

const Rules = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.tittle}>
                Rules and Terms
            </div>
            <div className={styles.text}>
                <div className={styles.vertical}></div>
                <div className={styles.right}>
                    1. Eligibility
                    Filmmakers from any country may participate in this competition. Entrants under the age of 18 must obtain parental consent. Films of any length are accepted, but all dialogue must be in English or have English subtitles.
                    <br></br>
                    2. Submission Limit
                    Entrants may submit multiple entries for consideration. Selected entries will be screened during our Annual Screening Event in Vancouver. Note that we have limited screening time, and only a select number of films will be chosen.
                    <br></br>

                    3. Production Date
                    There are no specific requirements regarding the production date or premiere status of films. Both old and new films are welcome.
                    <br></br>

                    4. Resubmission
                    Previously entered films may be resubmitted if they have not previously won awards in past editions of The Best Director & Filmmaker Awards – Vancouver and have undergone significant changes since their last submission.
                    <br></br>

                    5. Film Length
                    Ensure the accurate measurement of your film's length, including opening and closing credits. Improperly categorized films may be disqualified, and submission fees will not be refunded.
                    <br></br>

                    6. Script Submissions
                    Scripts must be submitted in PDF format, following proper screenwriting formatting.
                    <br></br>

                    7. Ownership and Rights
                    The entrant/submitter certifies that they have obtained all necessary rights, including image rights, talent releases, soundtrack permissions, and assume all responsibility for their material. The festival accepts no responsibility for submitted films.
                </div>
                <div className={styles.upper_star}>
                    *All entries submitted to The Best Director & Filmmaker Awards – Vancouver must adhere to the following guidelines. By submitting a film for consideration, the entrant/submitter/moviemaker/controlling company agrees to abide by these rules and terms.
                    <div className={styles.left}>

                        8. Script Ownership
                        All scripts should preferably have copyright protection before submission. The festival accepts no responsibility for submitted scripts.
                        <br></br>

                        9. Feedback
                        Participants will not receive feedback. Entries will be judged based on script, directing, acting, technical, and artistic merits.
                        <br></br>

                        10. Submission Format
                        The festival only accepts online screeners submitted through FilmFreeway.com.
                        <br></br>

                        11. Refund Policy

                        Submission fees are non-refundable, especially after the adjudication process has begun or after the submission deadline.
                        <br></br>

                        12. Materials Request
                        Nominees may be asked to provide trailers, cast and crew lists, posters, and headshots for promotional purposes. Participation in this request is voluntary.
                        <br></br>

                        13. Promotional Rights
                        The festival reserves the right to use trailers and other materials for promotional purposes indefinitely. Submitters accept sole responsibility for this usage. (Upon written agreement with the participant.)
                        <br></br>

                        14. Late Submissions
                        Late submissions will be considered for the next edition of the festival.

                        <br></br>
                        15. Judging Discretion
                        All decisions made by the festival's judges are final. Additional awards may be presented if deemed appropriate.

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Rules;