"use client";

import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="px-8 py-8">
      <h2 className="text-4xl mb-4 font-bold text-yellow-400 ">Experience</h2>
      <Timeline>
        <TimelineItem>
          <TimelinePoint icon={HiCalendar} />
          <TimelineContent>
            <TimelineTime className="text-white font-bold">
              September 2023 - March 2024
            </TimelineTime>
            <TimelineTitle>
              Machine Learning Intern
              <br></br>
              Borde Inc.
            </TimelineTitle>
            <TimelineBody>
              <ul className="list-disc text-white">
                <li>
                  Helped the team to automate annotations and segmentation to
                  improve the accuracy of various assigned classes.
                </li>
                <li>
                  Trained efficient models using Yolo-v5 on datasets containing
                  more than 150k images of almonds.
                </li>
              </ul>
            </TimelineBody>
            <Button color="gray">Certificate</Button>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
};

export default Experience;
