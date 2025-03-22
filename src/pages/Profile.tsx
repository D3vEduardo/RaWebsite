import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/auth/hook";
import { useEffect, useState } from "react";
import UserProfilePhoto from "../components/UserProfilePhoto";
import EvaluationCard from "../components/EvaluationCard";
import BackToHome from "../components/BackToHome.tsx";
import CreateNewEvaluation from "../components/CreateNewEvaluation.tsx";
import { useQuery } from "@tanstack/react-query";
import { api } from "../assets/libs/openapi/api.ts";
import DeleteEvaluationModal from "../components/DeleteEvaluationModal.tsx";
import EditEvaluationModal from "../components/EditEvaluationModal.tsx";

export default function Profile() {
  const [modalOnScreen, setModalOnScreen] = useState<
    "none" | "delete" | "edit"
  >("none");
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const userEvaluationQuery = useQuery({
    queryKey: ["evaluations", user?.uid],
    queryFn: async () => {
      if (!user) return;
      const accessToken = await user.getIdToken();
      const res = await api.GET("/evaluation/", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return res;
    },
  });

  useEffect(() => {
    if (!user) navigate("/login");
  }, [navigate, user]);

  if (!user) return null;

  return (
    <div
      className="flex flex-col justify-center items-center w-screen h-dvh bg-zinc-50
            overflow-hidden"
    >
      <figure className="max-w-90/100 max-h-90/100 bg-zinc-200 p-4 rounded-lg flex flex-col gap-4 shadow-lg">
        <div className="w-fit h-fit flex justify-start items-center p-2 rounded-lg gap-2 self-start">
          <UserProfilePhoto
            displayName={user?.displayName}
            photoURL={user?.photoURL}
            className="w-10 rounded-lg"
          />
          <div className="flex flex-col justify-start items-start text-start">
            <p
              className="font-bold text-lg text-zinc-700
                            max-w-[17ch] truncate"
            >
              {user.displayName}
            </p>
            <p
              onClick={logout}
              className="font-medium text-md text-primary-500 -mt-1
                            hover:cursor-pointer hover:text-primary-700 transition-all duration-300 ease-out"
            >
              Sair da conta
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start px-2">
          {userEvaluationQuery.data?.data?.evaluation ? (
            <>
              <h1 className="font-bold text-xl text-zinc-700">
                Sua avaliação:
              </h1>
              <EvaluationCard
                setModalOnScreen={setModalOnScreen}
                type="profile"
                evaluation={{
                  ...userEvaluationQuery.data.data.evaluation,
                  author: {
                    uid: user.uid,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                  },
                }}
              />
            </>
          ) : (
            <CreateNewEvaluation />
          )}
        </div>
      </figure>
      {modalOnScreen === "delete" ? (
        <DeleteEvaluationModal setModalOnScreen={setModalOnScreen} />
      ) : (
        modalOnScreen === "edit" && (
          <EditEvaluationModal setModalOnScreen={setModalOnScreen} />
        )
      )}
      <BackToHome />
    </div>
  );
}
