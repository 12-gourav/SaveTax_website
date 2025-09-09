import React, { useState } from "react";
import { FAQ } from "../constants/faq";

const Faq = () => {
  const [open, setOpen] = useState(1);

  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      {FAQ?.map((d) => (
        <div
          className="faq_question_wrap"
          onClick={() => setOpen(open === d.id ? "" : d.id)}
        >
          <div className="faq_question">
            <h5>{d.question}</h5>
            {d?.id === +open ? (
              <i className="bx bx-chevron-down"></i>
            ) : (
              <i className="bx bx-chevron-up"></i>
            )}
          </div>
          {d.id === open && (
            <div className="faq_answer">
              <p>{d.answer}</p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default Faq;
