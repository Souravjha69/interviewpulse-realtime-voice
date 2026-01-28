import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { interviewCovers } from "@/constants";
import { getRandomInterviewCover } from "@/lib/utils";




const InterviewCard = ({ role, type, techstack, createdAt }: InterviewCardProps) => {
  const feedback = null as Feedback | null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format(
    "MMM D, YYYY"
  );

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96">
      <div className="card-interview">
        <div>
          <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>

          <Image
            src={getRandomInterviewCover()}
            alt="coverimage"
            width={90}
            height={90}
            className="rounded-full object-cover size-[90px]"
          />
        </div>

        <h3 className="mt-5 capitalize">
            {role} Interview
        </h3>

        <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2">
                <Image src="/calendar.svg" alt="calender" width={22} height={22}/>
                <p>{formattedDate}</p>
            </div>
        </div>


        {/* <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">{role}</h3>
          <p className="text-sm text-primary-100">{formattedDate}</p>
          <div className="flex flex-wrap gap-2">
            {techstack?.slice(0, 4).map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 rounded-full bg-light-600">
                {tech}
              </span>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default InterviewCard;
