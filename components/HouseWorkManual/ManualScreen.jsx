import React from "react";
import { View, Text, Image } from "react-native";
import { Button } from "./Button";

export const ManualScreen = () => {
  const handleStartManual = () => {
    // Handle start manual action
  };

  const handleJoinManual = () => {
    // Handle join manual action
  };

  return (
    <View className="flex overflow-hidden flex-col items-center pt-48 pb-16 pl-5 mx-auto w-full text-2xl text-black bg-white border border-white border-solid max-w-[480px]">
      <View className="text-3xl">
        <Text accessibilityRole="header">housework manual</Text>
      </View>

      <Image
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9e774d1d-efd4-413c-9c92-10424ecd28fc?placeholderIfAbsent=true&apiKey=6bf29537f03a4c8888a584b5fd08bbcf",
        }}
        className="object-contain self-stretch mt-14 w-full aspect-[1.05]"
        accessibilityLabel="Housework manual illustration"
      />

      <Button
        label="manualを始める"
        variant="primary"
        onPress={handleStartManual}
      />

      <Button
        label="manualに参加する"
        variant="secondary"
        onPress={handleJoinManual}
      />
    </View>
  );
};
