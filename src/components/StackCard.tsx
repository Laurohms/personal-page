import { Avatar, Flex, Tooltip } from "@radix-ui/themes";
import java from "../assets/images/java.svg";
import spring from "../assets/images/Spring_Boot.svg";
import docker from "../assets/images/docker.svg";
import rabbit from "../assets/images/rabbitmq.svg";
import springSec from "../assets/images/spring security.png";
import git from "../assets/images/Git-Icon-1788C.png";
import aws from "../assets/images/aws.webp";
import jenkins from "../assets/images/jenkins-icon-filled-256.webp";
import k8s from "../assets/images/k8s-logo.png";
import linux from "../assets/images/aea951a1-825b-43bb-94fc-76b3b744418c.png";
import js from "../assets/images/JavaScript-logo.png";
import ts from "../assets/images/Typescript_logo_2020.svg.png";
import react from "../assets/images/react logo.png";
import tailwind from "../assets/images/Tailwind-logo.webp";
import node from "../assets/images/node-js6304.logowik.com.webp";

export const StackCard = () => {
  return (
    <>
      <Flex gap={"2"}>
        <Tooltip content="Java">
          <Avatar src={java} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="Spring">
          <Avatar src={spring} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="Spring Security">
          <Avatar src={springSec} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="Docker">
          <Avatar src={docker} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="RabbitMQ">
          <Avatar src={rabbit} radius="full" size={"4"} fallback />
        </Tooltip>
      </Flex>
      <Flex gap={"2"}>
        <Tooltip content="Git">
          <Avatar src={git} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="Amazon Web Services">
          <Avatar src={aws} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="Jenkins">
          <Avatar src={jenkins} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="Kubernetes">
          <Avatar src={k8s} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="Linux">
          <Avatar src={linux} radius="full" size={"4"} fallback />
        </Tooltip>
      </Flex>
      <Flex gap={"2"}>
        <Tooltip content="Javascript">
          <Avatar src={js} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="Typescript">
          <Avatar src={ts} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="ReactJS">
          <Avatar src={react} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="Tailwind CSS">
          <Avatar src={tailwind} radius="full" size={"4"} fallback />
        </Tooltip>
        <Tooltip content="NodeJs">
          <Avatar src={node} radius="full" size={"4"} fallback />
        </Tooltip>
      </Flex>
    </>
  );
};
