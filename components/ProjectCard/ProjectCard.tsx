import { css } from '@emotion/react'
import { Project } from '../../types/type'

type ProjectCardType = {
  projects: Project[]
}

function ProjectCard({ projects }: ProjectCardType) {
  return (
    <>
      {projects.map((project, idx: number) => (
        <div css={cardWrapper} key={idx}>
          <div className="dimmed"></div>
          <div className="circle">
            <span>
              VIEW <br />
              PROJECT
            </span>
          </div>
          <img src={`image/project/${project.image}`} alt="" />
          <p>{project.title}</p>
        </div>
      ))}
    </>
  )
}

const cardWrapper = css`
  position: relative;

  & > .dimmed {
    position: absolute;
    z-index: 50;

    width: 100%;
    height: 300px;
    border-radius: 30px;

    background: rgba(0, 0, 0, 0.4);
  }

  & > .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    & > span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      text-align: center;
    }

    display: none;
  }

  img {
    width: 100%;
    height: 300px;
    border-radius: 30px;

    object-fit: cover;
  }

  p {
    position: absolute;
    bottom: -30px;
    left: 0%;

    width: 100%;
    text-align: center;

    font-size: 1.2em;
    font-weight: 600;
  }

  &:hover {
    & > .dimmed {
      background: rgba(0, 0, 0, 0);
      transition: background 150ms ease-out;
    }
    & > .circle {
      width: 12rem;
      height: 12rem;
      color: white;
      background-color: #246591;
      border-radius: 50%;

      display: block;
      transition: all 150ms ease-out;
    }
  }
`

export default ProjectCard
